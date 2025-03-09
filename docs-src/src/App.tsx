import { useDialogOpener } from './../../dist/index';
import { Buttons } from './Buttons';

export default function App() {
  const { open } = useDialogOpener();

  return <div>
    <h1>React Light Dialog Demo</h1>
    <Buttons />
  </div>
}

