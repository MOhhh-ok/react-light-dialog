import { useState } from "react";
import { DialogProps, useDialog } from "react-light-dialog";

export function ReturnExample() {
  const { show } = useDialog();

  const handleClick = async () => {
    const res = await show<string | undefined>((params) => <ReturnDialog defaultValue="Some value" {...params} />);
    console.log(res); // The value returned from the dialog
  }

  return <button onClick={handleClick}>Open</button>
}

export function ReturnDialog(props: { defaultValue: string } & DialogProps<string | undefined>) {
  const { hide } = props;
  const [value, setValue] = useState(props.defaultValue);

  return <div >
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => hide(undefined)}>Cancel</button>
    <button onClick={() => hide(value)}>OK</button>
  </div>
}
