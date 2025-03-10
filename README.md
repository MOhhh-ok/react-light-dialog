# React Light Dialog

A lightweight, easy-to-use dialog library for React applications.

Check out the [demo](https://mohhh-ok.github.io/react-light-dialog/).

## Installation

```
npm install react-light-dialog
```

## Features

- Simple API with hooks
- Three dialog types: popover, modal, and non-modal
- Customizable styling
- Built on native HTML `<dialog>` element
- TypeScript support

## Basic Usage

1. Wrap your application with `LightDialogProvider` and import css:

```tsx
import { LightDialogProvider } from 'react-light-dialog';
import 'react-light-dialog/style.css';

function App() {

  return (
    <LightDialogProvider>
      <YourApp />
    </LightDialogProvider>
  );
}
```

2. Use the `useDialog` hook to open dialogs:

```tsx
function PopOver() {
  const { showPopover } = useDialog();
  return <button onClick={() => showPopover("Hello World!")}>PopOver</button>
}
```

3. Use `hide` method to hide dialog:

```tsx
function Modal() {
  const { showModal } = useDialog();
  return <button onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modal</button>
}

function Modeless() {
  const { show } = useDialog();
  return <button onClick={() => show(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modeless</button>
}
```

4. Use `hide` method to hide dialog and return value:

```tsx
function ConfirmButton() {
  const { showPopover } = useDialog();
  const handleConfirm = async () => {
    const confirmed = await showPopover(({ hide }) => <div>
      <p>Yes or No?</p>
      <button onClick={() => hide(false)}>No</button>
      <button onClick={() => hide(true)}>Yes</button>
    </div>);
    showPopover("User confirmed: " + JSON.stringify(confirmed));
  }
  return <button onClick={handleConfirm}>Confirm</button>
}

function ChoiceButton() {
  const { showPopover } = useDialog();
  const handleChoice = async () => {
    const res = await showPopover<string>(({ hide }) => <div>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </div>);
    showPopover("User choice: " + res);
  }
  return <button onClick={handleChoice}>Choice</button>
}
```

5. Use custom components:

```tsx
interface MixedData {
  name: string;
  age: number;
}

function MixedDataDialog(props: { initialValue: MixedData } & DialogProps<MixedData>) {
  const { initialValue, hide } = props;
  const [name, setName] = useState(initialValue.name);
  const [age, setAge] = useState(initialValue.age);
  return <DialogContainer>
    <DialogTitle>Mixed data</DialogTitle>
    <DialogBody>
      name<br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />age<br />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide({ name, age })}>OK</button>
    </DialogFooter>
  </DialogContainer>
}

function MixedDataButton() {
  const { showPopover } = useDialog();

  const handleMixedData = async () => {
    const initialValue: MixedData = { name: "John", age: 20 };
    const res = await showPopover<MixedData>((params) => <MixedDataDialog {...params} initialValue={initialValue} />);
    showPopover("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}
```

## API

### LightDialogProvider

Provides the dialog context to your application.

### useDialog

Returns an object with `show`, `showModal`, `showPopover` method that accepts:
- `component | ({ hide }) => component`: React node to render inside the dialog
- `options`: Optional configuration object


### Options

```typescript
type LightDialogOptions = {
  style?: React.CSSProperties;
  className?: string;
}
```

## License

MIT