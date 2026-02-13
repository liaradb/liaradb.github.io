import { FC } from "react";
import { Box } from "@mui/material";

import { LinkItem } from "./link_item";

export const FooterLinks: FC<{
  links: { href: string; title: string }[];
  columns?: number;
}> = ({ links, columns = 4 }) => (
  <Box
    component="ul"
    padding={0}
    margin={0}
    width="100%"
    sx={{
      columnCount: {
        xs: 1,
        sm: 2,
        md: columns,
      },
    }}
  >
    {links.map(({ href, title }) => (
      <LinkItem href={href} title={title} key={title} />
    ))}
  </Box>
);
