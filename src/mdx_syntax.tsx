import { FC } from "react";
import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const MdxSyntax: FC<{ children: string | string[] }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        background: "black",
        "& > pre": {
          background: "none !important",
          margin: 0,
          padding: "0 !important",
        },
      }}
      padding={2}
    >
      <SyntaxHighlighter style={{ ...a11yDark }}>{children}</SyntaxHighlighter>
    </Box>
  );
};
