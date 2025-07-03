// import { useState } from "react";
// import { DialogProps, DialogContainer, DialogTitle, DialogBody, DialogFooter, showPopover } from "react-light-dialog";

// export function PromptButton() {
//   const handlePrompt = async () => {
//     const firstValue = 'Hello!';
//     const res = await showPopover([PromptDialog, firstValue]);
//     showPopover("User input: " + res);
//   }

//   return <button onClick={handlePrompt}>Input value</button>
// }

// function PromptDialog(props: DialogProps<string, string>) {
//   const { hide, payload } = props;
//   const [value, setValue] = useState(payload);

//   return <DialogContainer>
//     <DialogTitle>Prompt</DialogTitle>
//     <DialogBody>
//       Input value:<br />
//       <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
//     </DialogBody>
//     <DialogFooter>
//       <button onClick={() => hide()}>Cancel</button>
//       <button onClick={() => hide(value)}>OK</button>
//     </DialogFooter>
//   </DialogContainer>
// }
