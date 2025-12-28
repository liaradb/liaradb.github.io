import { FC, Fragment } from "react";
import { Box } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const MdxSyntax: FC<{
  children: string | string[];
  className?: string;
}> = ({ children, className }) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1];
  return language ? (
    <SyntaxHighlighter
      PreTag={Fragment}
      style={{ ...a11yDark }}
      language={language}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <Box
      component="span"
      sx={{ background: grey["900"], color: yellow["A200"] }}
      paddingX={".25em"}
    >
      <code>{children}</code>
    </Box>
  );
};

export const MdxSyntaxPre: FC<{ children: string | string[] }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        background: "black",
      }}
      margin={0}
      padding={2}
      component="pre"
    >
      {children}
    </Box>
  );
};
