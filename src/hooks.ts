import { useContext } from "react";
import { DialogCloserContext, DialogOpenerContext } from "./contexts";

export function useDialogOpener() {
  return useContext(DialogOpenerContext);
}

export function useDialogCloser() {
  return useContext(DialogCloserContext);
}