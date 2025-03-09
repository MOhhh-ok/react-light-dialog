import { useState } from "react";
import { useDialogCloser } from "react-light-dialog";

interface Props {
  payload: {
    name: string;
    age: number;
  },
}

export function ReturnDialogMixed(props: Props) {
  const { payload } = props;
  const { close } = useDialogCloser();
  const [value, setValue] = useState(payload);

  return <div>
    <p>Input name and age</p>
    <input type="text" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} />
    <br /><br />
    <input type="number" value={value.age} onChange={(e) => setValue({ ...value, age: Number(e.target.value) })} />
    <br /><br />
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button onClick={() => close(undefined)}>Cancel</button>
      <button onClick={() => close(value)}>OK</button>
    </div>
  </div>
}