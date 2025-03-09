import { useState } from "react";
import { useCloser, useOpener } from "react-light-dialog";

export function ReturnExample() {
  const { open } = useOpener();

  const handleClick = async () => {
    const res = await open(<ReturnDialog defaultValue="Some value" />);
    console.log(res); // The value returned from the dialog
  }

  return <button onClick={handleClick}>Open</button>
}

export function ReturnDialog(props: { defaultValue: string }) {
  const { defaultValue } = props;
  const { close } = useCloser();
  const [value, setValue] = useState(defaultValue);

  return <div >
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => close(undefined)}>Cancel</button>
    <button onClick={() => close(value)}>OK</button>
  </div>
}
