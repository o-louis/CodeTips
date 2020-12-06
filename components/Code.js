import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Code({ children }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={hybrid}
      className="syntaxhighlighter font-sans rounded-md"
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  );
}
