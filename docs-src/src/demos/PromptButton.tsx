import { showPopover } from 'react-light-dialog';
import { Prompt } from 'react-light-dialog/dialogs';

export function PromptButton() {
  async function handlePrompt() {
    const result = await showPopover([Prompt, { title: 'Input', description: 'What do you like?', value: 'cat' }]);
    showPopover("User input: " + JSON.stringify(result));
  }

  return <button onClick={handlePrompt}>Prompt</button>
}