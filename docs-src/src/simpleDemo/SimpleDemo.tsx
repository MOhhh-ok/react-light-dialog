import { useDialog } from "react-light-dialog";
import { WithCode } from "../WithCode";

export function SimpleDemo() {
  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <WithCode code={`
function PopOver(){
  const { show } = useDialog();
  return <button onClick={() => show("Hello World!")}>PopOver</button>
}
    `}>
      <PopOver />
    </WithCode>

    <WithCode code={`
function Modal(){
  const { show } = useDialog();
  return <button onClick={() => show(({ hide }) => <button onClick={hide}>Click to close!</button>, { type: "modal" })}>Modal</button>
}
    `}>
      <Modal />
    </WithCode>
    <WithCode code={`
function NonModal(){
  const { show } = useDialog();
  return <button onClick={() => show(({ hide }) => <button onClick={hide}>Click to close!</button>, { type: "non-modal" })}>NonModal</button>
}
    `}>
      <NonModal />
    </WithCode>
  </div>
}

function PopOver() {
  const { show } = useDialog();
  return <button onClick={() => show("Hello World!")}>PopOver</button>
}

function Modal() {
  const { show } = useDialog();
  return <button onClick={() => show(({ hide }) => <button onClick={hide}>Click to close!</button>, { type: "modal" })}>Modal</button>
}

function NonModal() {
  const { show } = useDialog();
  return <button onClick={() => show(({ hide }) => <button onClick={hide}>Click to close!</button>, { type: "non-modal" })}>NonModal</button>
}
