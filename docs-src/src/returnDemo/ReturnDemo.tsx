import { useState } from "react";
import { DialogProps, useDialog } from "react-light-dialog";
import { WithCode } from "../WithCode";

export function SimpleReturnDemo() {
  const { show } = useDialog();

  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <WithCode
      code={`
function Confirm() {
  const { show } = useDialog();
  const handleConfirm = async () => {
    const confirmed = await show(({ hide }) => <div>
      <p>Yes or No?</p>
      <button onClick={() => hide(false)}>No</button>
      <button onClick={() => hide(true)}>Yes</button>
    </div>);
    show("User confirmed: " + JSON.stringify(confirmed));
  }
  return <button onClick={handleConfirm}>Confirm</button>
}
`}>
      <ConfirmButton />
    </WithCode>

    <WithCode code={`
function Choice() {
  const { show } = useDialog();
  const handleChoice = async () => {
    const res = await show<string>(({ hide }) => <div>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </div>);
    show("User choice: " + res);
  }
  return <button onClick={handleChoice}>Choice</button>
}
      `}>
      <ChoiceButton />
    </WithCode>

    <WithCode code={`
function PromptDialog (props: DialogProps<string>) {
  const { hide } = props;
  const [value, setValue] = useState('');
  return <div>
    <p>Prompt</p>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => hide(value)}>OK</button>
  </div>
}

function PromptButton() {
  const { show } = useDialog();

  const handlePrompt = async () => {
    const res = await show<string>((params) => <PromptDialog {...params} />);
    show("User input: " + res);
  }

  return <button onClick={handlePrompt}>Input value</button>
}
      `}>
      <PromptButton />
    </WithCode>

    <WithCode code={`
interface MixedData {
  name: string;
  age: number;
}

function MixedDataDialog(props: { initialValue: MixedData } & DialogProps<MixedData>) {
  const { initialValue, hide } = props;
  const [name, setName] = useState(initialValue.name);
  const [age, setAge] = useState(initialValue.age);
  return <div>
    <p>Mixed data</p>
    <br />name<br />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <br />age<br />
    <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    <br />
    <button onClick={() => hide({ name, age })}>OK</button>
  </div >
}

function MixedDataButton() {
  const { show } = useDialog();

  const handleMixedData = async () => {
    const initialValue: MixedData = { name: "John", age: 20 };
    const res = await show<MixedData>((params) => <MixedDataDialog {...params} initialValue={initialValue} />);
    show("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}      `}>
      <MixedDataButton />
    </WithCode>
  </div >
}

function PromptButton() {
  const PromptDialog = (props: DialogProps<string>) => {
    const { hide } = props;
    const [value, setValue] = useState('');
    return <div>
      <p>Prompt</p>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => hide(value)}>OK</button>
    </div>
  }

  const { show } = useDialog();

  const handlePrompt = async () => {
    const res = await show<string>((params) => <PromptDialog {...params} />);
    show("User input: " + res);
  }

  return <button onClick={handlePrompt}>Input value</button>
}

interface MixedData {
  name: string;
  age: number;
}

function MixedDataDialog(props: { initialValue: MixedData } & DialogProps<MixedData>) {
  const { initialValue, hide } = props;
  const [name, setName] = useState(initialValue.name);
  const [age, setAge] = useState(initialValue.age);
  return <div>
    <p>Mixed data</p>
    <br />name<br />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <br />age<br />
    <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    <br />
    <button onClick={() => hide({ name, age })}>OK</button>
  </div >
}

function MixedDataButton() {
  const { show } = useDialog();

  const handleMixedData = async () => {
    const initialValue: MixedData = { name: "John", age: 20 };
    const res = await show<MixedData>((params) => <MixedDataDialog {...params} initialValue={initialValue} />);
    show("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}

function ChoiceButton() {
  const { show } = useDialog();
  const handleChoice = async () => {
    const res = await show<string>(({ hide }) => <div>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </div>);
    show("User choice: " + res);
  }
  return <button onClick={handleChoice}>Choice</button>
}

function ConfirmButton() {
  const { show } = useDialog();
  const handleConfirm = async () => {
    const confirmed = await show(({ hide }) => <div>
      <p>Yes or No?</p>
      <button onClick={() => hide(false)}>No</button>
      <button onClick={() => hide(true)}>Yes</button>
    </div>);
    show("User confirmed: " + JSON.stringify(confirmed));
  }
  return <button onClick={handleConfirm}>Confirm</button>
}