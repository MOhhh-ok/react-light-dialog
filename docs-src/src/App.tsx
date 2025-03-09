import { useDialogOpener } from './../../dist/index';
import { Buttons } from './nestedDemo/Buttons';
import { NestedDemo } from './nestedDemo/NestedDemo';
import { ReturnDemo } from './returnDemo/ReturnDemo';

export default function App() {
  const { open } = useDialogOpener();

  return <div>
    <h1>React Light Dialog Demo</h1>
    <h2>Nested demo</h2>
    <NestedDemo />
    <h2>Return values demo</h2>
    <ReturnDemo />
  </div>
}

