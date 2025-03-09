import { useDialogCloser } from "react-light-dialog";

export function ConfirmDialog() {
  const { close } = useDialogCloser();
  return <div>
    <p>Confirm</p>
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button onClick={() => close(false)}>Cancel</button>
      <button onClick={() => close(true)}>OK</button>
    </div>
  </div>
}
