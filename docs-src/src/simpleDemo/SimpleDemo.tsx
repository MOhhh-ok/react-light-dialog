import { useDialog } from "react-light-dialog";
import { WithCode } from "../WithCode";

export function SimpleDemo() {
  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <WithCode code={`
function PopOver() {
  const { showPopover } = useDialog();
  return <button onClick={() => showPopover("Hello World!")}>PopOver</button>
}
    `}>
      <PopOver />
    </WithCode>

    <WithCode code={`
function Modal() {
  const { showModal } = useDialog();
  return <button onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modal</button>
}
    `}>
      <Modal />
    </WithCode>

    <WithCode code={`
function Modeless() {
  const { show } = useDialog();
  return <button onClick={() => show(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modeless</button>
}
    `}>
      <Modeless />
    </WithCode>
  </div>
}

function PopOver() {
  const { showPopover } = useDialog();
  return <button onClick={() => showPopover("Hello World!")}>PopOver</button>
}

function Modal() {
  const { showModal } = useDialog();
  return <button onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modal</button>
}

function Modeless() {
  const { show } = useDialog();
  return <button onClick={() => show(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modeless</button>
}
