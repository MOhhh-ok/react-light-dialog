# React Light Dialog

A lightweight and easy-to-use dialog library for React applications.

- [React Light Dialog](#react-light-dialog)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
    - [Import CSS](#import-css)
    - [Prebuilt dialogs](#prebuilt-dialogs)
    - [showPopover](#showpopover)
    - [showModal, showModeless, hide](#showmodal-showmodeless-hide)
    - [Return values with hide](#return-values-with-hide)
    - [Custom Dialogs](#custom-dialogs)
  - [API](#api)
    - [show functions](#show-functions)
    - [DialogProps\<I, R\>](#dialogpropsi-r)
    - [DialogContainer, etc.](#dialogcontainer-etc)
    - [CSS class](#css-class)
  - [License](#license)

## Demo

The [demo](https://mohhh-ok.github.io/react-light-dialog/) page contains sample code.

## Installation

```
npm install react-light-dialog
```

## Features

- Very lightweight
- Highly customizable
- Supports Popover, Modal, and Modeless dialogs
- Uses HTML dialog tag
- Type safety with TypeScript

## Usage

### Import CSS

First, import the CSS file.
  
```tsx
import "react-light-dialog/style.css";
```

### Prebuilt dialogs

Simple prebuild dialogs.

```tsx
import { showModal, showPopover } from 'react-light-dialog';
import { Alert, Confirm, Prompt } from 'react-light-dialog/dialogs';

export function AlertButton() {
  return <button onClick={() => showModal([Alert, { title: 'Hello', description: 'World!' }])}>Alert</button>
}

export function ConfirmButton() {
  async function handleConfirm() {
    const result = await showModal([Confirm, { title: 'Confirm', description: 'Do you want to confirm?' }]);
    showPopover("User Confirmed: " + JSON.stringify(result));
  }

  return <button onClick={handleConfirm}>Confirm</button>
}

export function PromptButton() {
  async function handlePrompt() {
    const result = await showPopover([Prompt, { title: 'Input', description: 'What do you like?', value: 'cat' }]);
    showPopover("User input: " + JSON.stringify(result));
  }

  return <button onClick={handlePrompt}>Prompt</button>
}
```

### showPopover

Use the `showPopover` function to display a dialog.

```tsx
import { showPopover } from "react-light-dialog";

export function Popover() {
  return <button onClick={() => showPopover("Hello World!")}>Popover</button>
}
```

### showModal, showModeless, hide

You can also use `showModal` and `showModeless`. To close the dialog, use the `hide` method passed in the callback.

```tsx
import { showModal, showModeless } from "react-light-dialog";

function Modal() {
  return <button onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modal</button>
}

function Modeless() {
  return <button onClick={() => showModeless(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modeless</button>
}
```

### Return values with hide

The `hide` method can also return values. When you pass a value to the `hide` method, it returns it asynchronously to the showXXX function.

```tsx
import { showPopover } from "react-light-dialog";

function ConfirmButton() {
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
    const res = await showPopover(({ hide }) => <div>
      <p>Choice</p>
      <button onClick={() => hide('John')}>John</button>
      <button onClick={() => hide('Anna')}>Anna</button>
    </div>);
    showPopover("User choice: " + res);
  }
  
  return <button onClick={handleChoice}>Choice</button>
}
```

### Custom Dialogs

Creating custom dialogs ensures type safety. `DialogProps<I, R>` is the type that custom dialogs receive. `I` is the input type, and `R` is the return type. `I` becomes the `payload` property, and `R` is the argument of the `hide` method.

```tsx
import { useState } from "react";
import { DialogProps, DialogContainer, DialogTitle, DialogBody, DialogFooter, showPopover } from "react-light-dialog";

interface MixedData {
  name: string;
  age: number;
}

export function MixedDataButton() {
  const initialValue: MixedData = { name: "John", age: 20 };

  const handleMixedData = async () => {
    const res = await showPopover([MixedDataDialog, initialValue]);
    showPopover("User input: " + JSON.stringify(res));
  }

  return <button onClick={handleMixedData}>Input mixed values</button>
}

function MixedDataDialog(props: DialogProps<MixedData, MixedData>) {
  const { payload, hide } = props;
  const [name, setName] = useState(payload.name);
  const [age, setAge] = useState(payload.age);

  return <DialogContainer>
    <DialogTitle>Mixed data</DialogTitle>
    <DialogBody>
      name<br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />age<br />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide()}>Cancel</button>
      <button onClick={() => hide({ name, age })}>OK</button>
    </DialogFooter>
  </DialogContainer>
}
```

## API

### show functions

You can use the `showModeless`, `showModal`, and `showPopover` methods. They take the following arguments:
- `component: React.Node | ({ hide }) => React.Node | [React.FC, props]`: The component to render inside the dialog
- `options`: Optional configuration object


```typescript
// Options
type LightDialogOptions = {
  style?: React.CSSProperties;
  className?: string;
}
```

### DialogProps<I, R>

This is the type that custom dialogs receive. `I` is the input type, and `R` is the return type. `I` becomes the `payload` property, and `R` is the argument of the `hide` method.

```tsx
type DialogProps<I, R> = {
  payload: I;
  hide: (result?: R) => void;
}
```

### DialogContainer, etc.

The following components are available:

- `DialogContainer`
- `DialogTitle`
- `DialogBody`
- `DialogFooter`

```tsx
function PromptDialog(props: DialogProps<string, string>) {
  const { hide, payload } = props;
  const [value, setValue] = useState(payload);

  return <DialogContainer>
    <DialogTitle>Prompt</DialogTitle>
    <DialogBody>
      Input value:<br />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </DialogBody>
    <DialogFooter>
      <button onClick={() => hide()}>Cancel</button>
      <button onClick={() => hide(value)}>OK</button>
    </DialogFooter>
  </DialogContainer>
}
```

### CSS class

- `light-dialog`: Set on the <dialog> element
- `dialog-container`: Set on DialogContainer
- `dialog-title`: Set on DialogTitle
- `dialog-body`: Set on DialogBody
- `dialog-footer`: Set on DialogFooter

## License

MIT
