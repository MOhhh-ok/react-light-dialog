import { DialogBody, DialogContainer, DialogFooter, DialogTitle } from '../../src/components';
import { NestedDemo } from './nestedDemo/NestedDemo';
import { SimpleReturnDemo } from './returnDemo/ReturnDemo';
import { SimpleDemo } from './simpleDemo/SimpleDemo';
import { StylesDemo } from './stylesDemo/StylesDemo';

export default function App() {
  return <div>
    {/* <Test2 /> */}
    <h1>React Light Dialog Demo</h1>
    <h2>Simple demo</h2>
    <SimpleDemo />
    <h2>Return values demo</h2>
    <SimpleReturnDemo />
    <h2>Nested demo</h2>
    <NestedDemo />
    <h2>Styled demo</h2>
    <StylesDemo />
  </div>
}



function Test() {
  return <dialog open>
    <div style={{ display: "flex", flexDirection: "column", height: "200px" }}>
      <div>title</div>
      <div style={{ flex: 1, overflow: "auto" }}>
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
      </div>
      <div>footer</div>
    </div>
  </dialog>
}


function Test2() {
  return <dialog open className="light-dialog">
    <DialogContainer>
      <DialogTitle>title</DialogTitle>
      <DialogBody>
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
        body<br />body<br />body<br />body<br />body<br />body<br />body<br />
      </DialogBody>
      <DialogFooter>
        footer
      </DialogFooter>
    </DialogContainer>
  </dialog>
}

