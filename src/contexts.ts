import { createContext, ReactNode } from "react";
import { DialogOptions, DialogProps, ShowFunction } from "./types";

export type DialogContextType = {
  showPopover<T>(component: ReactNode | ((params: DialogProps<T>) => ReactNode), options?: DialogOptions): Promise<T | undefined>;
  showModal<T>(component: ReactNode | ((params: DialogProps<T>) => ReactNode), options?: DialogOptions): Promise<T | undefined>;
  show<T>(component: ReactNode | ((params: DialogProps<T>) => ReactNode), options?: DialogOptions): Promise<T | undefined>;
}

export const DialogContext = createContext<DialogContextType>(null!);
