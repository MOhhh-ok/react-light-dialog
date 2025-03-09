import { createContext } from "react";
import { SimpleDialogOptions } from "./types";

type DialogOpenerContextType = {
  open: (component: React.ReactNode, options?: SimpleDialogOptions) => HTMLDialogElement;
}

type DialogCloserContextType = {
  close: () => void;
}

export const DialogOpenerContext = createContext<DialogOpenerContextType>(null!);
export const DialogCloserContext = createContext<DialogCloserContextType>(null!);
