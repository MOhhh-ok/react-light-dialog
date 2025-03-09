import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { DialogCloserContext, DialogOpenerContext } from './contexts';
import { css } from '@emotion/css';
export function LightDialogProvider(props) {
    const containerRef = useRef(null);
    function open(component, options) {
        const { type = 'popover', style } = options ?? {};
        if (!containerRef.current)
            throw new Error('ref.current is null');
        const dialog = document.createElement('dialog');
        dialog.popover = 'auto';
        dialog.className = css `
      ::backdrop {
        background-color: rgba(0, 0, 0, 0.1);
        }
    `;
        Object.assign(dialog.style, {
            border: '1px solid #aaa',
            borderRadius: '0.5rem',
            padding: "0.8rem 1rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            ...style
        });
        function handleToggle(e) {
            if (e.newState == 'open')
                return;
            root.unmount();
            dialog.remove();
        }
        dialog.addEventListener('toggle', handleToggle);
        containerRef.current?.appendChild(dialog);
        const root = createRoot(dialog);
        root.render(React.createElement(DialogOpenerContext.Provider, { value: { open } },
            React.createElement(DialogCloserContext.Provider, { value: {
                    close: () => {
                        if (type === 'popover') {
                            dialog.hidePopover();
                        }
                        else {
                            dialog.close();
                        }
                    }
                } }, component)));
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
    return React.createElement(DialogOpenerContext.Provider, { value: { open } },
        props.children,
        React.createElement("div", { ref: containerRef }));
}
