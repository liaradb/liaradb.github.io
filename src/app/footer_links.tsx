import { Box, Button } from "@mui/material";
import { FC } from "react";

export const FooterLinks: FC<{
  links: { href: string; title: string }[];
  columns?: number;
}> = ({ links, columns = 2 }) => (
  <Box
    component="ul"
    padding={0}
    margin={0}
    sx={{
      columnCount: columns,
    }}
  >
    {links.map(({ href, title }) => (
      <Link href={href} title={title} key={title} />
    ))}
  </Box>
);

const Link: FC<{ href: string; title: string }> = ({ href, title }) => (
  <Box component="li" padding={0} sx={{ listStyleType: "none" }}>
    <Button variant="text" LinkComponent="a" color="info" href={href}>
      {title}
    </Button>
  </Box>
);
