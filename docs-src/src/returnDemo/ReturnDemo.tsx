import { useDialogOpener } from "react-light-dialog";
import { PromptDialog } from "./PromptDialog";
import { ReturnDialogMixed } from "./ReturnDialogMixed";
import { ConfirmDialog } from "./ConfirmDialog";

export function ReturnDemo() {
  const { open } = useDialogOpener();

  async function handleClick1() {
    const res: string | undefined = await open(<PromptDialog defaultValue="Some value" />);
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

  async function handleClick3() {
    const res: boolean | undefined = await open(<ConfirmDialog />);
    await open(<div>
      <p>Result: {JSON.stringify(res)}</p>
    </div>)
  }

  return <div style={{ display: "flex", gap: "0.5rem" }}>
    <button onClick={handleClick1}>Prompt</button>
    <button onClick={handleClick3}>Confirm</button>
    <button onClick={handleClick2}>Input values</button>
  </div>
}
