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

