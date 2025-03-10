export const demos={
"Choice":`import { showPopover, DialogContainer } from "react-light-dialog";
import { DialogProps } from \'react-light-dialog';

type Choice = 'John' | 'Anna';

export function ChoiceButton() {
  const handleChoice = async () => {
    const res = await showPopover(ChoiceDialog);
    showPopover("User choice: " + res);
  }

  return <button onClick={handleChoice}>Choice</button>
}

function ChoiceDialog(props: DialogProps<void, Choice>) {
  const { hide } = props;
  return <DialogContainer>
    <p>Choice</p>
    <button onClick={() => hide('John')}>John</button>
    <button onClick={() => hide('Anna')}>Anna</button>
  </DialogContainer>
}`,
"Confirm":`import { showPopover, DialogContainer, DialogTitle, DialogBody, DialogFooter, DialogProps } from "react-light-dialog";

export function ConfirmButton() {
  const handleConfirm = async () => {
    const confirmed = await showPopover(ConfirmDialog);
    showPopover("User answered: " + JSON.stringify(confirmed));
  }

  return <button onClick={handleConfirm}>Confirm</button>
}

function ConfirmDialog(props: DialogProps<void, boolean>) {
  const { hide } = props;
  return <DialogContainer>
    <DialogTitle>Confirm</DialogTitle>
    <DialogBody>
      <p>Yes or No?</p>
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide(false)}>No</button>
      <button onClick={() => hide(true)}>Yes</button>
    </DialogFooter>
  </DialogContainer>
}`,
"Mixed":`import { useState } from "react";
import { DialogProps, DialogContainer, DialogTitle, DialogBody, DialogFooter, showPopover } from "react-light-dialog";

interface MixedData {
  name: string;
  age: number;
}

export function MixedDataButton() {
  const initialValue: MixedData = { name: "John", age: 20 };

  const handleMixedData = async () => {
    const res = await showPopover([MixedDataDialog, initialValue]);
    showPopover("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}

function MixedDataDialog(props: DialogProps<MixedData, MixedData>) {
  const { payload, hide } = props;
  const [name, setName] = useState(payload.name);
  const [age, setAge] = useState(payload.age);

  return <DialogContainer>
    <DialogTitle>Mixed data</DialogTitle>
    <DialogBody>
      name<br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />age<br />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide()}>Cancel</button>
      <button onClick={() => hide({ name, age })}>OK</button>
    </DialogFooter>
  </DialogContainer>
}

`,
"Modal":`import { showModal } from "react-light-dialog";

export function Modal() {
  return <button
    onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}
  >
    Modal
  </button>
}
`,
"Modeless":`import { showModeless } from "react-light-dialog";

export function Modeless() {
  return <button
    onClick={() => showModeless(({ hide }) => <button onClick={hide}>Click to close!</button>)}
  >
    Modeless
  </button>
}
`,
"Popover":`import { showPopover } from "react-light-dialog";

export function Popover() {
  return <button onClick={() => showPopover("Hello World!")}>Popover</button>
}
`,
"Prompt":`import { useState } from "react";
import { DialogProps, DialogContainer, DialogTitle, DialogBody, DialogFooter, showPopover } from "react-light-dialog";

export function PromptButton() {
  const handlePrompt = async () => {
    const firstValue = \'Hello!';
    const res = await showPopover([PromptDialog, firstValue]);
    showPopover("User input: " + res);
  }

  return <button onClick={handlePrompt}>Input value</button>
}

function PromptDialog(props: DialogProps<string, string>) {
  const { hide, payload } = props;
  const [value, setValue] = useState(payload);

  return <DialogContainer>
    <DialogTitle>Prompt</DialogTitle>
    <DialogBody>
      Input value:<br />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide()}>Cancel</button>
      <button onClick={() => hide(value)}>OK</button>
    </DialogFooter>
  </DialogContainer>
}
`,
};