import { createContext } from "react";
import { CloseFunction, OpenFunction } from "./types";

type DialogOpenerContextType = {
  open: OpenFunction<any>;
}

type DialogCloserContextType = {
  close: CloseFunction<any>;
}

export const DialogOpenerContext = createContext<DialogOpenerContextType>(null!);
export const DialogCloserContext = createContext<DialogCloserContextType>(null!);
