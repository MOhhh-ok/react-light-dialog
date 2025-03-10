import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { defaultClassName } from "./consts";
import { DialogOptions, DialogProps, DialogType, HideFunction } from "./types";

type FirstParam<I, R> = ReactNode | React.FC<DialogProps<I, R>> | [React.FC<DialogProps<I, R>>, I]

function _show<I = any, R = any>(Component: FirstParam<I, R>, type: DialogType, options?: DialogOptions) {
  return new Promise<R | undefined>((resolve, reject) => {
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

    const hide: HideFunction<R> = (data?: R) => {
      if (type === 'popover') {
        dialog.hidePopover();
      } else {
        dialog.close();
      }
      resolve(data);
    }

    const root = createRoot(dialog);

    const cmp = (() => {
      if (typeof Component === 'function') return <Component hide={hide} {...{} as any} />;
      if (Array.isArray(Component)) return (() => {
        const [Comp, params] = Component;
        return <Comp hide={hide} payload={params} />;
      })()
      return Component;
    })();

    root.render(cmp);

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


async function showPopover<I, R>(component: FirstParam<I, R>, options?: DialogOptions): Promise<R | undefined> {
  return _show<I, R>(component, 'popover', options);
}
async function showModal<I, R>(component: FirstParam<I, R>, options?: DialogOptions): Promise<R | undefined> {
  return _show<I, R>(component, 'modal', options);
}
async function showModeless<I, R>(component: FirstParam<I, R>, options?: DialogOptions): Promise<R | undefined> {
  return _show<I, R>(component, 'modeless', options);
}

export { showModal, showModeless, showPopover };

