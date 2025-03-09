import { useDialogOpener } from "react-simple-dialog";
import { Buttons } from "./Buttons";

export function Page() {
  const { open } = useDialogOpener();

  return <div>
    <h1>React Light Dialog Demo</h1>
    <Buttons />
  </div>
}