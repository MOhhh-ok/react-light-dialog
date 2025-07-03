import { ReactNode } from "react";
import { DialogProps } from "../types";
import { DialogBody, DialogContainer, DialogFooter, DialogTitle } from "../components";


export type ConfirmPayload = {
  title?: ReactNode;
  description?: ReactNode
}

export function Confirm(props: DialogProps<ConfirmPayload, boolean>) {
  const { hide, payload } = props;
  const { title, description } = payload;
  return <DialogContainer>
    <DialogTitle>{title}</DialogTitle>
    <DialogBody>
      <div>
        {description}
      </div>
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide(false)}>Cancel</button>
      <button onClick={() => hide(true)}>OK</button>
    </DialogFooter>
  </DialogContainer>
}