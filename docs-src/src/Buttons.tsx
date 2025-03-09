import { useDialogCloser, useDialogOpener } from "react-simple-dialog";
import { TestDialog } from "./TestDialog";

export function Buttons() {
  const { open } = useDialogOpener();
  const closerContext = useDialogCloser();

  const payload = { openedAt: new Date() };
  const style: React.CSSProperties = {
    padding: "0.5em 1em"
  }

  return <div style={{ display: "flex", gap: "0.5rem" }}>
    <button style={style} onClick={() => open(<TestDialog payload={{ ...payload, type: "popover" }} />, { type: 'popover' })}>PopOver</button>
    <button style={style} onClick={() => open(<TestDialog payload={{ ...payload, type: "modal" }} />, { type: 'modal' })}>Modal</button>
    <button style={style} onClick={() => open(<TestDialog payload={{ ...payload, type: "non-modal" }} />, { type: 'non-modal' })}>Non Modal</button>
    {closerContext && <button style={style} onClick={closerContext.close}>Close</button>}
  </div>
}