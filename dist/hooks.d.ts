/// <reference types="react" />
export declare function useDialogOpener(): {
    open: (component: import("react").ReactNode, options?: import("./types").SimpleDialogOptions | undefined) => HTMLDialogElement;
};
export declare function useDialogCloser(): {
    close: () => void;
};
