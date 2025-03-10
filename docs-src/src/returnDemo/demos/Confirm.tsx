import { showPopover, DialogContainer, DialogTitle, DialogBody, DialogFooter } from "react-light-dialog";

export function ConfirmButton() {
  const handleConfirm = async () => {
    const confirmed = await showPopover(({ hide }) => <DialogContainer>
      <DialogTitle>Confirm</DialogTitle>
      <DialogBody>
        <p>Yes or No?</p>
      </DialogBody>
      <DialogFooter>
        <button onClick={() => hide(false)}>No</button>
        <button onClick={() => hide(true)}>Yes</button>
      </DialogFooter>
    </DialogContainer>);
    showPopover("User confirmed: " + JSON.stringify(confirmed));
  }

  return <button onClick={handleConfirm}>Confirm</button>
}