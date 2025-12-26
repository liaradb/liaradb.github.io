import { Box, Link } from "@mui/material";
import { FC } from "react";

export const FooterLinks: FC<{
  links: { href: string; title: string }[];
  columns?: number;
}> = ({ links, columns = 2 }) => (
  <Box
    component="ul"
    padding={0}
    margin={0}
    width="100%"
    sx={{
      columnCount: columns,
    }}
  >
    {links.map(({ href, title }) => (
      <LinkItem href={href} title={title} key={title} />
    ))}
  </Box>
);

const LinkItem: FC<{ href: string; title: string }> = ({ href, title }) => (
  <Box component="li" padding={0} margin={0} sx={{ listStyleType: "none" }}>
    <Link color="info" href={href} sx={{ textDecoration: "none" }}>
      {title}
    </Link>
  </Box>
);
