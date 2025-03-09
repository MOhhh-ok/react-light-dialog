import { Buttons } from "./Buttons";

interface Payload {
  type: 'popover' | 'modal' | 'non-modal';
  openedAt: Date;
}
export function TestDialog(props: { payload: Payload }) {
  const { payload } = props;
  return <div>
    <p>Hello! This is <span style={{ color: "red" }}>{payload.type}</span> dialog.</p>
    <p>Opened at <br />{payload.openedAt.toLocaleString()}</p>
    <Buttons />
  </div>
}