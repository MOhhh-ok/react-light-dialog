import { showModeless } from "react-light-dialog";

export function Modeless() {
  return <button
    onClick={() => showModeless(({ hide }) => <button onClick={hide}>Click to close!</button>)}
  >
    Modeless
  </button>
}
