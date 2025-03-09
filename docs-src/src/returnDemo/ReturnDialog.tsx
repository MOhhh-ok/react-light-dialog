import { useState } from "react";
import { useDialogCloser } from "../../../dist";

interface Props {
  defaultValue: string;
}

export function ReturnDialog(props: Props) {
  const { defaultValue } = props;
  const { close } = useDialogCloser();
  const [value, setValue] = useState(defaultValue);

  return <div>
    <p>Input value you like</p>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <br /><br />
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button onClick={() => close(undefined)}>Cancel</button>
      <button onClick={() => close(value)}>OK</button>
    </div>
  </div>
}