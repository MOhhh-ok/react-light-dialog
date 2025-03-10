import { WithCode } from "../WithCode";
import { ChoiceButton } from "./demos/Choice";
import { ConfirmButton } from "./demos/Confirm";
import { MixedDataButton } from "./demos/Mixed";
import { PromptButton } from "./demos/Prompt";

export function SimpleReturnDemo() {
  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

    <WithCode code={`
import { showPopover, DialogContainer } from "react-light-dialog";

export function ChoiceButton() {
  const handleChoice = async () => {
    const res = await showPopover<string>(({ hide }) => <DialogContainer>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </DialogContainer>);
    showPopover("User choice: " + res);
  }

  return <button onClick={handleChoice}>Choice</button>
}      `}>
      <ChoiceButton />
    </WithCode>

    <WithCode
      code={`
import { showPopover, DialogContainer, DialogTitle, DialogBody, DialogFooter } from "react-light-dialog";

export function ConfirmButton() {
  const handleConfirm = async () => {
    const confirmed = await showPopover(({ hide }) => <DialogContainer>
      <DialogTitle>Confirm</DialogTitle>
      <DialogBody>
        <p>Yes or No?</p>
      </DialogBody>
      <DialogFooter>
        <button onClick={() => hide(false)}>No</button>
        <button onClick={() => hide(true)}>Yes</button>
      </DialogFooter>
    </DialogContainer>);
    showPopover("User confirmed: " + JSON.stringify(confirmed));
  }

  return <button onClick={handleConfirm}>Confirm</button>
}`}>
      <ConfirmButton />
    </WithCode>

    <WithCode code={`
import { useState } from "react";
import { DialogProps, DialogContainer, DialogTitle, DialogBody, DialogFooter, showPopover } from "react-light-dialog";

export function PromptButton() {
  const handlePrompt = async () => {
    const res = await showPopover<string>((params) => <PromptDialog {...params} />);
    showPopover("User input: " + res);
  }

  return <button onClick={handlePrompt}>Input value</button>
}

function PromptDialog(props: DialogProps<string>) {
  const { hide } = props;
  const [value, setValue] = useState('');

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
      `}>
      <PromptButton />
    </WithCode>

    <WithCode code={`
import { useState } from "react";
import { DialogProps, DialogContainer, DialogTitle, DialogBody, DialogFooter, showPopover } from "react-light-dialog";

interface MixedData {
  name: string;
  age: number;
}

export function MixedDataButton() {
  const initialValue: MixedData = { name: "John", age: 20 };

  const handleMixedData = async () => {
    const res = await showPopover<MixedData>((params) => <MixedDataDialog {...params} initialValue={initialValue} />);
    showPopover("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}

function MixedDataDialog(props: { initialValue: MixedData } & DialogProps<MixedData>) {
  const { initialValue, hide } = props;
  const [name, setName] = useState(initialValue.name);
  const [age, setAge] = useState(initialValue.age);

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

      `}>
      <MixedDataButton />
    </WithCode>
  </div >
}


