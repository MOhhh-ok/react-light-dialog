import { showPopover, DialogContainer, DialogTitle, DialogBody, DialogFooter, DialogProps } from "react-light-dialog";

export function ConfirmButton() {
  const handleConfirm = async () => {
    const confirmed = await showPopover(ConfirmDialog);
    showPopover("User answered: " + JSON.stringify(confirmed));
  }

  return <button onClick={handleConfirm}>Confirm</button>
}

function ConfirmDialog(props: DialogProps<void, boolean>) {
  const { hide } = props;
  return <DialogContainer>
    <DialogTitle>Confirm</DialogTitle>
    <DialogBody>
      <p>Yes or No?</p>
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide(false)}>No</button>
      <button onClick={() => hide(true)}>Yes</button>
    </DialogFooter>
  </DialogContainer>
}