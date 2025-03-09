import { DialogProps } from "react-light-dialog";
import { Buttons } from "./Buttons";

interface Payload {
  type: 'popover' | 'modal' | 'non-modal';
  depth: number;
}
export function TestDialog(props: { payload: Payload } & { hide?: DialogProps['hide'] }) {
  const { payload, hide } = props;
  return <div>
    <p>Hello! This is <span style={{ color: "red" }}>{payload.type}</span> dialog.</p>
    <p>Dialog depth: {payload.depth}</p>
    <Buttons depth={payload.depth} hide={hide} />
  </div>
}