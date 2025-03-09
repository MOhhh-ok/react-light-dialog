/// <reference types="react" />
import { SimpleDialogOptions } from "./types";
type DialogOpenerContextType = {
    open: (component: React.ReactNode, options?: SimpleDialogOptions) => HTMLDialogElement;
};
type DialogCloserContextType = {
    close: () => void;
};
export declare const DialogOpenerContext: import("react").Context<DialogOpenerContextType>;
export declare const DialogCloserContext: import("react").Context<DialogCloserContextType>;
export {};
