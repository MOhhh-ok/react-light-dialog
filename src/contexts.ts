import { createContext } from "react";
import { CloseFunction, OpenFunction } from "./types";

type DialogOpenerContextType<T> = {
  open: OpenFunction<T>;
}

type DialogCloserContextType<T> = {
  close: CloseFunction<T>;
}

export const DialogOpenerContext = createContext<DialogOpenerContextType<any>>(null!);
export const DialogCloserContext = createContext<DialogCloserContextType<any>>(null!);
