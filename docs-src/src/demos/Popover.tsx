import { showPopover } from "react-light-dialog";

export function Popover() {
  return <button onClick={() => showPopover("Hello World!")}>Popover</button>
}
