import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const ExampleGo = () => {
  return (
    <Box
      sx={{
        "& > pre": {
          background: "none !important",
          margin: 0,
          padding: "0 !important",
        },
      }}
      padding={2}
    >
      <SyntaxHighlighter language="go" style={{ ...a11yDark }}>
        {example.trim()}
      </SyntaxHighlighter>
    </Box>
  );
};

const example = `
func handleEvents(ctx context.Context, id string) error {
  for event, err := range getEvents(ctx, id) {
    if err != nil {
      return err
    }
    // ...
  }
}
`;
