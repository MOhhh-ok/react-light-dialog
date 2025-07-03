import { WithCode } from "../WithCode";
import { demos } from "../generated";
import { ChoiceButton } from "../demos/Choice";
import { ConfirmButton } from "../demos/Confirm";
import { MixedDataButton } from "../demos/Mixed";

export function SimpleReturnDemo() {
  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

    <WithCode code={demos.Choice}>
      <ChoiceButton />
    </WithCode>

    <WithCode code={demos.Mixed}>
      <MixedDataButton />
    </WithCode>
  </div >
}

