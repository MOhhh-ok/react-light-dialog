import { useDialogCloser, useDialogOpener } from "../../../dist/index";
import { TestDialog } from "./TestDialog";

export function Buttons(props: { depth: number }) {
  const { depth } = props;
  const { open } = useDialogOpener();
  const closerContext = useDialogCloser();

  const style: React.CSSProperties = {
    padding: "0.5em 1em"
  }

  async function handleClick(type: 'popover' | 'modal' | 'non-modal') {
    const res = await open(<TestDialog payload={{ depth: depth + 1, type }} />, { type });
    console.log(res);
  }

  return <div style={{ display: "flex", gap: "0.5rem" }}>
    <button style={style} onClick={() => handleClick('popover')}>PopOver</button>
    <button style={style} onClick={() => handleClick('modal')}>Modal</button>
    <button style={style} onClick={() => handleClick('non-modal')}>Non Modal</button>
    {closerContext && <button style={style} onClick={() => closerContext.close({ depth })}>Close</button>}
  </div>
}