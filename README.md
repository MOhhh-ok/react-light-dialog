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
import { useDialog } from 'react-light-dialog';

function YourComponent() {
  const { show } = useDialog();

  const openDialog = () => {
    show(
      <div>
        <h2>Dialog Content</h2>
        <p>This is a simple dialog!</p>
      </div>,
      { type: 'modal' }
    );
  };

  return <button onClick={openDialog}>Open Dialog</button>;
}
```

3. Use `hide` method to hide dialog:

```tsx
const handleNoValue = async () => {
  const res = await show<void>(({ hide }) => <div>
    <p>No value return</p>
    <button onClick={() => hide()}>OK</button>
  </div>);
  show(JSON.stringify(res));
}
```

4. Use `hide` method to hide dialog and return value:

```tsx
const handleConfirm = async () => {
  const res = await show<boolean>(({ hide }) => <div>
    <p>Confirm</p>
    <button onClick={() => hide(false)}>Cancel</button>
    <button onClick={() => hide(true)}>OK</button>
  </div>);
  show(JSON.stringify(res));
}

const handleChoice = async () => {
  const res = await show<string>(({ hide }) => <div>
    <p>Choice</p>
    <button onClick={() => hide('John')}>John</button>
    <button onClick={() => hide('Anna')}>Anna</button>
  </div>);
  show(JSON.stringify(res));
}
```

5. Use custom components:

```tsx
export function PromptDemo() {
  const { show } = useDialog();

  const handlePrompt = async () => {
    const res = await show<string>((params) => <PromptDialog {...params} />);
    show(JSON.stringify(res));
  }

  const handleMixedData = async () => {
    const res = await show<{ name: string, age: number }>((params) => <MixedDataDialog {...params} />);
    show(JSON.stringify(res));
  }

  const handleInitialValue = async () => {
    const res = await show<string>((params) => <InitialValueDialog {...params} value="John" />);
    show(JSON.stringify(res));
  }

  return <div>
    <button onClick={handlePrompt}>Input value</button>
    <button onClick={handleMixedData}>Input mixed values</button>
    <button onClick={handleInitialValue}>Input value with initial value</button>
  </div>
}

function PromptDialog(props: DialogProps<string>) {
  const [value, setValue] = useState('');
  const { hide } = props;
  return <div>
    <p>Prompt</p>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => hide(value)}>OK</button>
  </div>
}

function MixedDataDialog(props: DialogProps<{ name: string, age: number }>) {
  const { hide } = props;
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  return <div>
    <p>Mixed data</p>
    <br />name<br />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <br />age<br />
    <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    <br />
    <button onClick={() => hide({ name, age })}>OK</button>
  </div >
}

function InitialValueDialog(props: { value: string } & DialogProps<string>) {
  const [value, setValue] = useState(props.value);
  const { hide } = props;
  return <div>
    <p>Prompt with initial value</p>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => hide(value)}>OK</button>
  </div>
}
```

## API

### LightDialogProvider

Provides the dialog context to your application.

### useDialog

Returns an object with an `open` method that accepts:
- `component`: React node to render inside the dialog
- `options`: Optional configuration object

### useCloser

Returns an object with a `close` method to close the current dialog.

close(value: any): void

### Options

```typescript
type LightDialogOptions = {
  type?: 'popover' | 'modal' | 'non-modal';
  style?: React.CSSProperties;
}
```

## License

MIT