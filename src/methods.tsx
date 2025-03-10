import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { defaultClassName } from "./consts";
import { DialogOptions, DialogProps, DialogType, HideFunction } from "./types";

function _show<T = any>(component: ReactNode | ((params: DialogProps<any>) => ReactNode), type: DialogType, options?: DialogOptions) {
  return new Promise<T | undefined>((resolve, reject) => {
    const { className } = options ?? {};
    const style = { ...options?.style };

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
    document.body.appendChild(dialog);

    const hide: HideFunction<T> = (data?: T) => {
      if (type === 'popover') {
        dialog.hidePopover();
      } else {
        dialog.close();
      }
      resolve(data);
    }

    const root = createRoot(dialog);
    root.render(<>
      {typeof component === 'function' ? component({ hide }) : component}
    </>
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

async function showPopover<T>(component: ReactNode | ((params: DialogProps<T>) => ReactNode), options?: DialogOptions): Promise<T | undefined> {
  return _show<T>(component, 'popover', options);
}
async function showModal<T>(component: ReactNode | ((params: DialogProps<T>) => ReactNode), options?: DialogOptions): Promise<T | undefined> {
  return _show<T>(component, 'modal', options);
}
async function showModeless<T>(component: ReactNode | ((params: DialogProps<T>) => ReactNode), options?: DialogOptions): Promise<T | undefined> {
  return _show<T>(component, 'modeless', options);
}

export { showModal, showModeless, showPopover };

