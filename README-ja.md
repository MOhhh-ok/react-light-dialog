# React Light Dialog

軽くて簡単に使える、Reactアプリケーション用のダイアログライブラリです。

[デモ](https://mohhh-ok.github.io/react-light-dialog/)ページでは、サンプルコードを掲載しています。

- [React Light Dialog](#react-light-dialog)
  - [インストール](#インストール)
  - [特徴](#特徴)
  - [使用方法](#使用方法)
    - [CSSをインポート](#cssをインポート)
    - [showPopover](#showpopover)
    - [showModal, shoModeless, hide](#showmodal-shomodeless-hide)
    - [hideで値を返す](#hideで値を返す)
    - [カスタムダイアログ](#カスタムダイアログ)
  - [API](#api)
    - [show functions](#show-functions)
    - [DialogProps\<I, R\>](#dialogpropsi-r)
    - [DialogContainer, etc.](#dialogcontainer-etc)
    - [CSS class](#css-class)
  - [License](#license)


## インストール

```
npm install react-light-dialog
```

## 特徴

- とても軽い
- カスタマイズ範囲が広い
- Popover, Modal, Modelessをサポート
- HTMLのdialogタグを使用
- TypeScriptでの型安全性

## 使用方法

### CSSをインポート

はじめに、CSSファイルをインポートします。
  
```tsx
import "react-light-dialog/style.css";
```

### showPopover

`showPopover`関数で、ダイアログを表示します。

```tsx
import { showPopover } from "react-light-dialog";

export function Popover() {
  return <button onClick={() => showPopover("Hello World!")}>Popover</button>
}
```

### showModal, shoModeless, hide

`showModal` と `showModeless` も使えます。ダイアログを閉じるには、コールバックで渡される `hide` メソッドを使います。

```tsx
import { showModal, showModeless } from "react-light-dialog";

function Modal() {
  return <button onClick={() => showModal(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modal</button>
}

function Modeless() {
  return <button onClick={() => showModeless(({ hide }) => <button onClick={hide}>Click to close!</button>)}>Modeless</button>
}
```

### hideで値を返す

`hide` メソッドは、値を返すこともできます。`hide`メソッドに値を渡すと、非同期でshowXXX関数に返します。

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

### カスタムダイアログ

カスタムダイアログを作成すると、型安全性を確保できます。`DialogProps<I, R>` は、カスタムダイアログが受け取る型です。`I` は入力型、`R` は返り値の型です。`I`は`payload`プロパティになり、`R`は`hide`メソッドの引数となります。

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

`showModeless`, `showModal`, `showPopover` メソッドが使えます。以下の引数を取ります。
- `component: React.Node | ({ hide }) => React.Node | [React.FC, props]`: ダイアログの中に描画するコンポーネント
- `options`: Optional configuration object


```typescript
// Options
type LightDialogOptions = {
  style?: React.CSSProperties;
  className?: string;
}
```

### DialogProps<I, R>

カスタムダイアログが受け取る型です。`I` は入力型、`R` は返り値の型です。`I`は`payload`プロパティになり、`R`は`hide`メソッドの引数となります。

```tsx
type DialogProps<I, R> = {
  payload: I;
  hide: (result?: R) => void;
}
```

### DialogContainer, etc.

以下のコンポーネントを使用できます。

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

- `light-dialog`: <dialog>に設定される
- `dialog-container`: DialogContainerに設定される
- `dialog-title`: DialogTitleに設定される
- `dialog-body`: DialogBodyに設定される
- `dialog-footer`: DialogFooterに設定される

## License

MIT