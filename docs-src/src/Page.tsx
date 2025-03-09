import { useDialogOpener } from "react-simple-dialog";
import { Buttons } from "./Buttons";

export function Page() {
  const { open } = useDialogOpener();

  return <div>
    <h1>React Simple Dialog Demo</h1>
    <Buttons />
  </div>
}