import { ReactNode, useState } from "react";
import { DialogBody, DialogContainer, DialogFooter, DialogTitle } from "../components";
import { DialogProps } from "../types";


export type PromptPayload = {
  title?: ReactNode;
  description?: ReactNode
  value?: string;
}

export function Prompt(props: DialogProps<PromptPayload, string>) {
  const { hide, payload } = props;
  const { title, description } = payload;
  const [value, setValue] = useState(payload.value);
  return <DialogContainer>
    <DialogTitle>{title}</DialogTitle>
    <DialogBody>
      <div>
        {description}
      </div>
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide()}>Cancel</button>
      <button onClick={() => hide(value)}>OK</button>
    </DialogFooter>
  </DialogContainer>
}