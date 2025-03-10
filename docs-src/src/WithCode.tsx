import { PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { showPopover } from "react-light-dialog";

export function WithCode(props: PropsWithChildren & { code: string }) {
  return <div style={{ display: "inline-flex", flexDirection: "row", gap: "0px" }}>
    {props.children}
    <button onClick={() => showPopover(<SyntaxHighlighter
      language="tsx"
      style={vscDarkPlus}
      showLineNumbers={true}
    >
      {props.code.trim()}
    </SyntaxHighlighter>, { style: { padding: 0 } })}
      style={{ background: "#555", color: "#eee", fontSize: "0.6em", width: "5em", padding: "0.5em 0.8em" }}
    >&lt;/&gt;<br /> Code</button>
  </div>
}