import React, { PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";
import { defaultClassName } from "./consts";
import { CloserContext, OpenerContext } from './contexts';
import { CloseFunction, LightDialogOptions, OpenFunction } from "./types";

export interface LightDialogProviderProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

export function LightDialogProvider(props: LightDialogProviderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const open: OpenFunction<any> = (component: React.ReactNode, options?: LightDialogOptions) => {
    return new Promise((resolve, reject) => {
      const { type = 'popover', className } = options ?? {};
      const style = { ...props.style, ...options?.style };
      if (!containerRef.current) throw new Error('ref.current is null');

      const dialog = document.createElement('dialog');
      dialog.className = [defaultClassName, className].filter(Boolean).join(' ');
      dialog.popover = 'auto';
      Object.assign(dialog.style, style);

      function handleToggle(e: any) {
        if (e.newState == 'open') return;
        root.unmount();
        dialog.remove();
        resolve(undefined);
      }

      dialog.addEventListener('toggle', handleToggle);
      containerRef.current?.appendChild(dialog);

      const close: CloseFunction<any> = (data: any) => {
        if (type === 'popover') {
          dialog.hidePopover();
        } else {
          dialog.close();
        }
        resolve(data);
      }

      const root = createRoot(dialog);
      root.render(
        <OpenerContext.Provider value={{ open }}>
          <CloserContext.Provider value={{ close }}>
            {component}
          </CloserContext.Provider>
        </OpenerContext.Provider>
      );

      switch (type) {
        case 'popover':
          dialog.showPopover();
          break;
        case 'modal':
          dialog.showModal();
          break;
        case 'non-modal':
          dialog.show();
          break;
        default:
          throw new Error(`Invalid dialog type: ${type}`);
      }
      return dialog;
    });
  }

  return <OpenerContext.Provider value={{ open }}>
    {props.children}
    <div ref={containerRef}></div>
  </OpenerContext.Provider>
}

