import React, { PropsWithChildren, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { defaultClassName } from "./consts";
import { DialogContext } from './contexts';
import { DialogOptions, DialogProps, DialogType, HideFunction, ShowFunction } from "./types";

export interface LightDialogProviderProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

export function LightDialogProvider(props: LightDialogProviderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const _show = (component: ReactNode | ((params: DialogProps<any>) => ReactNode), type: DialogType, options?: DialogOptions) => {
    return new Promise((resolve, reject) => {
      const { className } = options ?? {};
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
        <DialogContext.Provider value={{ show, showModal, showPopover }}>
          {typeof component === 'function' ? component({ hide }) : component}
        </DialogContext.Provider>
      );

      switch (type) {
        case 'popover':
          dialog.showPopover();
          break;
        case 'modal':
          dialog.showModal();
          break;
        case 'modeless':
          dialog.show();
          break;
        default:
          throw new Error(`Invalid dialog type: ${type}`);
      }
      return dialog;
    });
  }

  const showPopover: ShowFunction = (component, options) => _show(component, 'popover', options);
  const showModal: ShowFunction = (component, options) => _show(component, 'modal', options);
  const show: ShowFunction = (component, options) => _show(component, 'modeless', options);

  return <DialogContext.Provider value={{ show, showModal, showPopover }}>
    {props.children}
    <div ref={containerRef}></div>
  </DialogContext.Provider>
}

