import { NestedDemo } from './nestedDemo/NestedDemo';
import { PromptDemo, SimpleReturnDemo } from './returnDemo/ReturnDemo';
import { StylesDemo } from './stylesDemo/StylesDemo';

export default function App() {
  return <div>
    <h1>React Light Dialog Demo</h1>
    <h2>Nested demo</h2>
    <NestedDemo />
    <h2>Return values demo</h2>
    <SimpleReturnDemo />
    <PromptDemo />
    <h2>Styled demo</h2>
    <StylesDemo />
  </div>
}

