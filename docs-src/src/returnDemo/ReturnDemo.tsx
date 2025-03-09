import { useState } from "react";
import { DialogProps, useDialog } from "react-light-dialog";

export function SimpleReturnDemo() {
  const { show } = useDialog();

  const handleNoValue = async () => {
    const res = await show<void>(({ hide }) => <div>
      <p>No value return</p>
      <button onClick={() => hide()}>OK</button>
    </div>);
    show(JSON.stringify(res));
  }

  const handleConfirm = async () => {
    const res = await show<boolean>(({ hide }) => <div>
      <p>Confirm</p>
      <button onClick={() => hide(false)}>Cancel</button>
      <button onClick={() => hide(true)}>OK</button>
    </div>);
    show(JSON.stringify(res));
  }

  const handleChoice = async () => {
    const res = await show<string>(({ hide }) => <div>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </div>);
    show(JSON.stringify(res));
  }

  return <div>
    <button onClick={handleNoValue}>No value</button>
    <button onClick={handleConfirm}>Confirm</button>
    <button onClick={handleChoice}>Choice</button>
  </div>
}

export function PromptDemo() {
  const { show } = useDialog();

  const handlePrompt = async () => {
    const res = await show<string>((params) => <PromptDialog {...params} />);
    show(JSON.stringify(res));
  }

  const handleMixedData = async () => {
    const res = await show<{ name: string, age: number }>((params) => <MixedDataDialog {...params} />);
    show(JSON.stringify(res));
  }

  const handleInitialValue = async () => {
    const res = await show<string>((params) => <InitialValueDialog {...params} value="John" />);
    show(JSON.stringify(res));
  }

  return <div>
    <button onClick={handlePrompt}>Input value</button>
    <button onClick={handleMixedData}>Input mixed values</button>
    <button onClick={handleInitialValue}>Input value with initial value</button>
  </div>
}

function PromptDialog(props: DialogProps<string>) {
  const [value, setValue] = useState('');
  const { hide } = props;
  return <div>
    <p>Prompt</p>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => hide(value)}>OK</button>
  </div>
}

function MixedDataDialog(props: DialogProps<{ name: string, age: number }>) {
  const { hide } = props;
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
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

function InitialValueDialog(props: { value: string } & DialogProps<string>) {
  const [value, setValue] = useState(props.value);
  const { hide } = props;
  return <div>
    <p>Prompt with initial value</p>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => hide(value)}>OK</button>
  </div>
}