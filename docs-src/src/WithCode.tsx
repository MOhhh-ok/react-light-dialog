import { PropsWithChildren } from "react";
import { useDialog } from "react-light-dialog";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function WithCode(props: PropsWithChildren & { code: string }) {
  const { showPopover } = useDialog();
  return <div style={{ display: "inline-flex", flexDirection: "row", gap: "0px" }}>
    {props.children}
    <button onClick={() => showPopover(<SyntaxHighlighter
      language="tsx"
      style={vscDarkPlus}
      showLineNumbers={true}
    >
      {props.code.trim()}
    </SyntaxHighlighter>, { style: { padding: 0 } })}
      style={{ background: "#444", color: "#eee", fontSize: "0.6em", width: "5em", padding: "0.5em 0.8em" }}
    >&lt;/&gt;<br /> Code</button>
  </div>
}