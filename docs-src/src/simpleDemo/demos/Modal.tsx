import { showModal } from "react-light-dialog";

export function Modal() {
  return <button
    onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}
  >
    Modal
  </button>
}
