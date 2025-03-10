import { showModal, showModeless, showPopover } from "react-light-dialog";
import { WithCode } from "../WithCode";
import { Popover } from "./demos/Popover";
import { Modal } from "./demos/Modal";
import { Modeless } from "./demos/Modeless";

export function SimpleDemo() {
  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <WithCode code={`
import { showPopover } from "react-light-dialog";

export function Popover() {
  return <button onClick={() => showPopover("Hello World!")}>Popover</button>
}
    `}>
      <Popover />
    </WithCode>

    <WithCode code={`
import { showModal } from "react-light-dialog";

export function Modal() {
  return <button
    onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}
  >
    Modal
  </button>
}
    `}>
      <Modal />
    </WithCode>

    <WithCode code={`
import { showModeless } from "react-light-dialog";

export function Modeless() {
  return <button
    onClick={() => showModeless(({ hide }) => <button onClick={hide}>Click to close!</button>)}
  >
    Modeless
  </button>
}
    `}>
      <Modeless />
    </WithCode>
  </div>
}
