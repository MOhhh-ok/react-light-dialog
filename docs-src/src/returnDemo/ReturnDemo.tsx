import { useState } from "react";
import { DialogProps, useDialog } from "react-light-dialog";
import { WithCode } from "../WithCode";
import { DialogBody, DialogContainer, DialogFooter, DialogTitle } from '../../../src/components';

export function SimpleReturnDemo() {
  const { show } = useDialog();

  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <WithCode
      code={`
function ConfirmButton() {
  const { showPopover } = useDialog();
  const handleConfirm = async () => {
    const confirmed = await showPopover(({ hide }) => <DialogContainer>
      <p>Yes or No?</p>
      <button onClick={() => hide(false)}>No</button>
      <button onClick={() => hide(true)}>Yes</button>
    </DialogContainer>);
    showPopover("User confirmed: " + JSON.stringify(confirmed));
  }
  return <button onClick={handleConfirm}>Confirm</button>
}
`}>
      <ConfirmButton />
    </WithCode>

    <WithCode code={`
function ChoiceButton() {
  const { showPopover } = useDialog();
  const handleChoice = async () => {
    const res = await showPopover<string>(({ hide }) => <DialogContainer>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </DialogContainer>);
    showPopover("User choice: " + res);
  }
  return <button onClick={handleChoice}>Choice</button>
}
      `}>
      <ChoiceButton />
    </WithCode>

    <WithCode code={`

function PromptButton() {
  const PromptDialog = (props: DialogProps<string>) => {
    const { hide } = props;
    const [value, setValue] = useState('');
    return <DialogContainer>
      <DialogTitle>Prompt</DialogTitle>
      <DialogBody>
        Input value:<br />
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </DialogBody>
      <DialogFooter>
        <button onClick={() => hide(value)}>OK</button>
      </DialogFooter>
    </DialogContainer>
  }

  const { showPopover } = useDialog();

  const handlePrompt = async () => {
    const res = await showPopover<string>((params) => <PromptDialog {...params} />);
    showPopover("User input: " + res);
  }

  return <button onClick={handlePrompt}>Input value</button>
}      `}>
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
  return <DialogContainer>
    <DialogTitle>Mixed data</DialogTitle>
    <DialogBody>
      name<br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />age<br />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide({ name, age })}>OK</button>
    </DialogFooter>
  </DialogContainer>
}

function MixedDataButton() {
  const { showPopover } = useDialog();

  const handleMixedData = async () => {
    const initialValue: MixedData = { name: "John", age: 20 };
    const res = await showPopover<MixedData>((params) => <MixedDataDialog {...params} initialValue={initialValue} />);
    showPopover("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}
      `}>
      <MixedDataButton />
    </WithCode>
  </div >
}


function ConfirmButton() {
  const { showPopover } = useDialog();
  const handleConfirm = async () => {
    const confirmed = await showPopover(({ hide }) => <DialogContainer>
      <p>Yes or No?</p>
      <button onClick={() => hide(false)}>No</button>
      <button onClick={() => hide(true)}>Yes</button>
    </DialogContainer>);
    showPopover("User confirmed: " + JSON.stringify(confirmed));
  }
  return <button onClick={handleConfirm}>Confirm</button>
}

function ChoiceButton() {
  const { showPopover } = useDialog();
  const handleChoice = async () => {
    const res = await showPopover<string>(({ hide }) => <DialogContainer>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </DialogContainer>);
    showPopover("User choice: " + res);
  }
  return <button onClick={handleChoice}>Choice</button>
}

function PromptButton() {
  const PromptDialog = (props: DialogProps<string>) => {
    const { hide } = props;
    const [value, setValue] = useState('');
    return <DialogContainer>
      <DialogTitle>Prompt</DialogTitle>
      <DialogBody>
        Input value:<br />
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </DialogBody>
      <DialogFooter>
        <button onClick={() => hide(value)}>OK</button>
      </DialogFooter>
    </DialogContainer>
  }

  const { showPopover } = useDialog();

  const handlePrompt = async () => {
    const res = await showPopover<string>((params) => <PromptDialog {...params} />);
    showPopover("User input: " + res);
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
  return <DialogContainer>
    <DialogTitle>Mixed data</DialogTitle>
    <DialogBody>
      name<br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />age<br />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide({ name, age })}>OK</button>
    </DialogFooter>
  </DialogContainer>
}

function MixedDataButton() {
  const { showPopover } = useDialog();

  const handleMixedData = async () => {
    const initialValue: MixedData = { name: "John", age: 20 };
    const res = await showPopover<MixedData>((params) => <MixedDataDialog {...params} initialValue={initialValue} />);
    showPopover("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}
