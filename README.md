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

2. Use the `useOpener` hook to open dialogs:

```tsx
import { useOpener } from 'react-light-dialog';

function YourComponent() {
  const opener = useOpener();

  const openDialog = () => {
    opener.open(
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

3. Use the `useCloser` hook inside dialog content to close it:

```tsx
import { useCloser } from 'react-light-dialog';

function DialogContent() {
  const closer = useCloser();

  return (
    <div>
      <h2>Dialog Content</h2>
      <p>This is a simple dialog!</p>
      <button onClick={closer.close}>Close</button>
    </div>
  );
}
```

4. You can return value on dialog:

```tsx
import {useOpener, useCloser } from 'react-light-dialog';

export function ReturnExample() {
  const opener = useOpener();

  const handleClick = async () => {
    const res = await opener.open(<ReturnDialog defaultValue="Some value" />);
    console.log(res); // The value returned from the dialog
  }

  return <button onClick={handleClick}>Open</button>
}

export function ReturnDialog(props: { defaultValue: string }) {
  const { defaultValue } = props;
  const closer = useCloser();
  const [value, setValue] = useState(defaultValue);

  return <div>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => closer.close(undefined)}>Cancel</button>
    <button onClick={() => closer.close(value)}>OK</button> {/* Return value on closing */}
  </div>
}
```


## API

### LightDialogProvider

Provides the dialog context to your application.

### useOpener

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