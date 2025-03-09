export declare function useDialogOpener(): {
    open: (component: React.ReactNode, options?: import("./types").LightDialogOptions) => HTMLDialogElement;
};
export declare function useDialogCloser(): {
    close: () => void;
};
