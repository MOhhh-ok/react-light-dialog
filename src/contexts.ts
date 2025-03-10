import { createContext, ReactNode } from "react";
import { DialogOptions, DialogProps, ShowFunction } from "./types";

export type DialogContextType = {
  show<T = any>(component: ReactNode | ((params: DialogProps<T>) => ReactNode), options?: DialogOptions): Promise<T | undefined>;
}

export const DialogContext = createContext<DialogContextType>(null!);
