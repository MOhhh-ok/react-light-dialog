import { HideFunction, useDialog } from "react-light-dialog";
import { TestDialog } from "./TestDialog";

export function Buttons(props: { depth: number, hide?: HideFunction | undefined }) {
  const { depth } = props;
  const { show } = useDialog();

  async function handleClick(type: 'popover' | 'modal' | 'non-modal') {
    const res = await show(({ hide }) => <TestDialog payload={{ depth: depth + 1, type }} hide={hide as any} />, { type });
  }

  return <div>
    <button onClick={() => handleClick('popover')}>PopOver</button>
    <button onClick={() => handleClick('modal')}>Modal</button>
    <button onClick={() => handleClick('non-modal')}>Non Modal</button>
    {props.hide && <button onClick={props.hide}>Hide</button>}
  </div>
}