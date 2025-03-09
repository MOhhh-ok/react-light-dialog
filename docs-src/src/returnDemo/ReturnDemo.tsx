import { useDialogOpener } from "react-light-dialog";
import { ReturnDialog } from "./ReturnDialog";
import { ReturnDialogMixed } from "./ReturnDialogMixed";

export function ReturnDemo() {
  const { open } = useDialogOpener();

  async function handleClick1() {
    const res: string | undefined = await open(<ReturnDialog defaultValue="Some value" />);
    await open(<div>
      <p>Result: {JSON.stringify(res)}</p>
    </div>)
  }

  async function handleClick2() {
    const res: { name: string, age: number } | undefined = await open(<ReturnDialogMixed payload={{ name: "John", age: 20 }} />);
    await open(<div>
      <p>Result: {JSON.stringify(res)}</p>
    </div>)
  }

  return <div style={{ display: "flex", gap: "0.5rem" }}>
    <button onClick={handleClick1}>Input value</button>
    <button onClick={handleClick2}>Input mixed value</button>
  </div>
}
