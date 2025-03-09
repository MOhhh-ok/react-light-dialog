import { createContext } from "react";
import { CloseFunction, OpenFunction } from "./types";

type OpenerContextType<T> = {
  open: OpenFunction<T>;
}

type CloserContextType<T> = {
  close: CloseFunction<T>;
}

export const OpenerContext = createContext<OpenerContextType<any>>(null!);
export const CloserContext = createContext<CloserContextType<any>>(null!);
