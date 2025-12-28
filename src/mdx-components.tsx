import { Box, Divider, Typography } from "@mui/material";
import type { MDXComponents } from "mdx/types";
import { LinkLink } from "./components";

const components = {
  h1: ({ children }) => {
    return (
      <Box marginTop={3} marginBottom={1}>
        <Typography variant="h1">{children}</Typography>
        <Divider />
      </Box>
    );
  },
  h2: ({ children }) => {
    return (
      <Box marginTop={3} marginBottom={1}>
        <Typography variant="h2">{children}</Typography>
        <Divider />
      </Box>
    );
  },
  h3: ({ children }) => {
    return (
      <Box marginTop={3} marginBottom={1}>
        <Typography variant="h3">{children}</Typography>
        <Divider />
      </Box>
    );
  },
  h4: ({ children }) => {
    return <Typography variant="h4">{children}</Typography>;
  },
  h5: ({ children }) => {
    return <Typography variant="h5">{children}</Typography>;
  },
  h6: ({ children }) => {
    return <Typography variant="h6">{children}</Typography>;
  },
  hr: ({ children }) => {
    return <Divider>{children}</Divider>;
  },
  p: ({ children }) => {
    return <Typography variant="body1">{children}</Typography>;
  },
  a: ({ children, href }) => {
    const external =
      href.startsWith("https://") || href.startsWith("http://") || false;
    return (
      <LinkLink href={href} target={external ? "_blank" : undefined}>
        {children}
      </LinkLink>
    );
  },
} as MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
