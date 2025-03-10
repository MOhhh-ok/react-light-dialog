import { PropsWithChildren } from "react";

export function DialogContainer(props: PropsWithChildren) {
  return <div className="dialog-container">
    {props.children}
  </div>
}

export function DialogBody(props: PropsWithChildren) {
  return <div className="dialog-body">
    {props.children}
  </div>
}

export function DialogTitle(props: PropsWithChildren) {
  return <div className="dialog-title">
    {props.children}
  </div>
}

export function DialogFooter(props: PropsWithChildren) {
  return <div className="dialog-footer">
    {props.children}
  </div>
}