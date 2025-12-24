import { Box, Button, Container, Divider } from "@mui/material";
import { FC } from "react";

export const Footer = () => {
  return (
    <Box>
      <Divider />
      <Box paddingY={2} display="flex" alignItems="start" component={Container}>
        <Box flexGrow={1}>
          <Copyright />
        </Box>
        <Box>
          <Links
            links={[
              { title: "About us", href: "/about-us" },
              { title: "License", href: "/license" },
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
