import React, { PropsWithChildren, useRef } from "react";
import { createRoot } from "react-dom/client";
import { DialogCloserContext, DialogOpenerContext } from './contexts';
import { LightDialogOptions } from "./types";

export interface LightDialogProviderProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

export function LightDialogProvider(props: LightDialogProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  function open(component: React.ReactNode, options?: LightDialogOptions) {
    const { type = 'popover' } = options ?? {};
    const style = { ...props.style, ...options?.style };
    if (!containerRef.current) throw new Error('ref.current is null');

    const dialog = document.createElement('dialog');
    dialog.className = 'light-dialog';
    dialog.popover = 'auto';
    Object.assign(dialog.style, style);

    function handleToggle(e: any) {
      if (e.newState == 'open') return;
      root.unmount();
      dialog.remove()
    }

    dialog.addEventListener('toggle', handleToggle);
    containerRef.current?.appendChild(dialog);

    const root = createRoot(dialog);
    root.render(
      <DialogOpenerContext.Provider value={{ open }}>
        <DialogCloserContext.Provider value={{
          close: () => {
            if (type === 'popover') {
              dialog.hidePopover();
            } else {
              dialog.close();
            }
          }
        }}>
          {component}
        </DialogCloserContext.Provider>
      </DialogOpenerContext.Provider>
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
  }

  return <DialogOpenerContext.Provider value={{ open }}>
    {props.children}
    <div ref={containerRef}></div>
  </DialogOpenerContext.Provider>
}

