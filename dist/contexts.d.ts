import { LightDialogOptions } from "./types";
type DialogOpenerContextType = {
    open: (component: React.ReactNode, options?: LightDialogOptions) => HTMLDialogElement;
};
type DialogCloserContextType = {
    close: () => void;
};
export declare const DialogOpenerContext: import("react").Context<DialogOpenerContextType>;
export declare const DialogCloserContext: import("react").Context<DialogCloserContextType>;
export {};
