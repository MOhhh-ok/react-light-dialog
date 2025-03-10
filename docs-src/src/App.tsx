import { NestedDemo } from './nestedDemo/NestedDemo';
import { SimpleReturnDemo } from './returnDemo/ReturnDemo';
import { SimpleDemo } from './simpleDemo/SimpleDemo';
import { StylesDemo } from './stylesDemo/StylesDemo';

export default function App() {
  return <div>
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

