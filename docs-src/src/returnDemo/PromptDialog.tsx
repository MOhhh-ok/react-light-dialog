import { useState } from "react";
import { useCloser } from "react-light-dialog";

interface Props {
  defaultValue: string;
}

export function PromptDialog(props: Props) {
  const { defaultValue } = props;
  const { close } = useCloser();
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