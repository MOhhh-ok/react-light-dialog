import { WithCode } from "../WithCode";
import { AlertButton } from "../demos/AlertButton";
import { ConfirmButton } from '../demos/ConfirmButton';
import { PromptButton } from "../demos/PromptButton";
import { demos } from "../generated";

export function PrebuiltsDemo() {
  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <WithCode code={demos.AlertButton}>
      <AlertButton />
    </WithCode>
    <WithCode code={demos.ConfirmButton}>
      <ConfirmButton />
    </WithCode>
    <WithCode code={demos.PromptButton}>
      <PromptButton />
    </WithCode>
  </div>
}
