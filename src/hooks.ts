import { useContext } from "react";
import { CloserContext, OpenerContext } from "./contexts";

export function useOpener() {
  return useContext(OpenerContext);
}

export function useCloser() {
  return useContext(CloserContext);
}