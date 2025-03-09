import { useOpener } from "react-light-dialog";

export function StylesDemo() {
  const dlgs = useOpener();

  return <div>
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button onClick={() => dlgs.open(<div>Red Background</div>, { style: { background: "red", color: "white" } })}>Red Background</button>
      <button onClick={() => dlgs.open(<div>Salmon backdrop<br />With className and css</div>, { className: 'back-salmon' })}>Salmon backdrop</button>
    </div>
  </div>
}
