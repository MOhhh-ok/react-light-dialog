import { showPopover, DialogContainer } from "react-light-dialog";
import { DialogProps } from 'react-light-dialog';

type Choice = 'John' | 'Anna';

export function ChoiceButton() {
  const handleChoice = async () => {
    const res = await showPopover(ChoiceDialog);
    showPopover("User choice: " + res);
  }

  return <button onClick={handleChoice}>Choice</button>
}

function ChoiceDialog(props: DialogProps<void, Choice>) {
  const { hide } = props;
  return <DialogContainer>
    <p>Choice</p>
    <button onClick={() => hide('John')}>John</button>
    <button onClick={() => hide('Anna')}>Anna</button>
  </DialogContainer>
}