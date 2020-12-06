import Highlight, { defaultProps } from "prism-react-renderer";

export default function Code({ children }) {
  return (
    <Highlight {...defaultProps} code={children} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} syntaxhighlighter`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
