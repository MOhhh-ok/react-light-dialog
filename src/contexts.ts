import { createContext } from "react";
import { LightDialogOptions } from "./types";

type DialogOpenerContextType = {
  open: (component: React.ReactNode, options?: LightDialogOptions) => HTMLDialogElement;
}

type DialogCloserContextType = {
  close: () => void;
}

export const DialogOpenerContext = createContext<DialogOpenerContextType>(null!);
export const DialogCloserContext = createContext<DialogCloserContextType>(null!);
