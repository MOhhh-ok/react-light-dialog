import React, { PropsWithChildren, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { defaultClassName } from "./consts";
import { DialogContext } from './contexts';
import { DialogOptions, DialogProps, HideFunction, ShowFunction } from "./types";

export interface LightDialogProviderProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

export function LightDialogProvider(props: LightDialogProviderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const show: ShowFunction<any> = (component: ReactNode | ((params: DialogProps<any>) => ReactNode), options?: DialogOptions) => {
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

      const hide: HideFunction<any> = (data: any) => {
        if (type === 'popover') {
          dialog.hidePopover();
        } else {
          dialog.close();
        }
        resolve(data);
      }

      const root = createRoot(dialog);
      root.render(
        <DialogContext.Provider value={{ show }}>
          {/* <HideContext.Provider value={{ hide }}> */}
          {typeof component === 'function' ? component({ hide }) : component}
          {/* </HideContext.Provider> */}
        </DialogContext.Provider>
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

  return <DialogContext.Provider value={{ show }}>
    {props.children}
    <div ref={containerRef}></div>
  </DialogContext.Provider>
}

