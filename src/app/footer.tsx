import { Box, Button, Divider } from "@mui/material";
import { FC } from "react";

export const Footer = () => {
  return (
    <Box>
      <Divider />
      <Box padding={2} display="flex" alignItems="start">
        <Box flexGrow={1}>
          <Copyright />
        </Box>
        <Box>
          <Links
            links={[
              { title: "About us", href: "/" },
              { title: "License", href: "/" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

const year = new Date().getFullYear();
const company = "Sean Johnson";
const copyright = `${company} ${year}`;

const Copyright = () => {
  return <>&copy; {copyright}</>;
};

const Links: FC<{ links: { href: string; title: string }[] }> = ({ links }) => (
  <Box component="ul" padding={0} margin={0}>
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
