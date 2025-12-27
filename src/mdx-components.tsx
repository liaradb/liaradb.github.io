import { Divider, Typography } from "@mui/material";
import type { MDXComponents } from "mdx/types";
import { LinkLink } from "./components";

const components = {
  h1: ({ children }) => {
    return <Typography variant="h1">{children}</Typography>;
  },
  h2: ({ children }) => {
    return <Typography variant="h2">{children}</Typography>;
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
