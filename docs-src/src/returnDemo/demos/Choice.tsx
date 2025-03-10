import { showPopover, DialogContainer } from "react-light-dialog";

export function ChoiceButton() {
  const handleChoice = async () => {
    const res = await showPopover<string>(({ hide }) => <DialogContainer>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </DialogContainer>);
    showPopover("User choice: " + res);
  }

  return <button onClick={handleChoice}>Choice</button>
}