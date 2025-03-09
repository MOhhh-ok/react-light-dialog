# React Light Dialog

A lightweight, easy-to-use dialog library for React applications.

## Installation

```
npm install react-light-dialog @emotion/css
```

## Features

- Simple API with hooks
- Three dialog types: popover, modal, and non-modal
- Customizable styling
- Built on native HTML `<dialog>` element
- TypeScript support

## Basic Usage

1. Wrap your application with `LightDialogProvider`:

```jsx
import { LightDialogProvider } from 'react-light-dialog';

function App() {

  return (
    <LightDialogProvider>
      <YourApp />
    </LightDialogProvider>
  );
}
```

2. Use the `useDialogOpener` hook to open dialogs:

```jsx
import { useDialogOpener } from 'react-light-dialog';

function YourComponent() {
  const { open } = useDialogOpener();

  const openDialog = () => {
    open(
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

3. Use the `useDialogCloser` hook inside dialog content to close it:

```jsx
import { useDialogCloser } from 'react-light-dialog';

function DialogContent() {
  const { close } = useDialogCloser();

  return (
    <div>
      <h2>Dialog Content</h2>
      <p>This is a simple dialog!</p>
      <button onClick={close}>Close</button>
    </div>
  );
}
```


## API

### LightDialogProvider

Provides the dialog context to your application.

### useDialogOpener

Returns an object with an `open` method that accepts:
- `component`: React node to render inside the dialog
- `options`: Optional configuration object

### useDialogCloser

Returns an object with a `close` method to close the current dialog.

### Options

```typescript
type LightDialogOptions = {
  type?: 'popover' | 'modal' | 'non-modal';
  style?: React.CSSProperties;
}
```

## License

MIT