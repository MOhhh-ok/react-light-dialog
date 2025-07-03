import { showModal, showPopover } from 'react-light-dialog';
import { Confirm } from 'react-light-dialog/dialogs';

export function ConfirmButton() {
  async function handleConfirm() {
    const result = await showModal([Confirm, { title: 'Confirm', description: 'Do you want to confirm?' }]);
    showPopover("User Confirmed: " + JSON.stringify(result));
  }

  return <button onClick={handleConfirm}>Confirm</button>
}