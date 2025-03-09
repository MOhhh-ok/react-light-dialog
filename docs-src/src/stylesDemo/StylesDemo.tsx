import { useDialog } from "react-light-dialog";

export function StylesDemo() {
  const { show } = useDialog();

  return <div>
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button onClick={() => show(<div>Red Background</div>, { style: { background: "red", color: "white" } })}>Red Background</button>
      <button onClick={() => show(<div>Salmon backdrop<br />With className and css</div>, { className: 'back-salmon' })}>Salmon backdrop</button>
    </div>
  </div>
}
