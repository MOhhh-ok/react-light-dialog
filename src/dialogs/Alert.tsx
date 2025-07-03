import { ReactNode } from "react";
import { DialogProps } from "../types";
import { DialogBody, DialogContainer, DialogFooter, DialogTitle } from "../components";

export type AlertPayload = {
  title?: ReactNode;
  description?: ReactNode
}

export function Alert(props: DialogProps<AlertPayload, void>) {
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
      <button onClick={() => hide()}>OK</button>
    </DialogFooter>
  </DialogContainer>
}