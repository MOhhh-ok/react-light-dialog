import { showModal } from 'react-light-dialog';
import { Alert } from 'react-light-dialog/dialogs';

export function AlertButton() {
  return <button onClick={() => showModal([Alert, { title: 'Hello', description: 'World!' }])}>Alert</button>
}