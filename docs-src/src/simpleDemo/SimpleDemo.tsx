import { WithCode } from "../WithCode";
import { demos } from "../generated";
import { Modal } from "../demos/Modal";
import { Modeless } from "../demos/Modeless";
import { Popover } from "../demos/Popover";

export function SimpleDemo() {
  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <WithCode code={demos.Popover}>
      <Popover />
    </WithCode>

    <WithCode code={demos.Modal}>
      <Modal />
    </WithCode>

    <WithCode code={demos.Modeless}>
      <Modeless />
    </WithCode>

  </div>
}
