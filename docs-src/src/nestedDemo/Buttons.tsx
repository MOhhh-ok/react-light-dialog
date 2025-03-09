import { useCloser, useOpener } from "react-light-dialog";
import { TestDialog } from "./TestDialog";

export function Buttons(props: { depth: number }) {
  const { depth } = props;
  const { open } = useOpener();
  const closerContext = useCloser();

  async function handleClick(type: 'popover' | 'modal' | 'non-modal') {
    const res = await open(<TestDialog payload={{ depth: depth + 1, type }} />, { type });
    console.log(res);
  }

  return <div style={{ display: "flex", gap: "0.5rem" }}>
    <button onClick={() => handleClick('popover')}>PopOver</button>
    <button onClick={() => handleClick('modal')}>Modal</button>
    <button onClick={() => handleClick('non-modal')}>Non Modal</button>
    {closerContext && <button onClick={() => closerContext.close({ depth })}>Close</button>}
  </div>
}