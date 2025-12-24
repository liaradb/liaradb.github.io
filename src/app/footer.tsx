import { Box, Container, Divider, Grid } from "@mui/material";

import { Copyright } from "./copyright";
import { FooterLinks } from "./footer_links";

export const Footer = () => {
  return (
    <Box>
      <Divider />
      <Box paddingY={2} component={Container}>
        <Content />
      </Box>
    </Box>
  );
};

const Content = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Copyright />
      </Grid>
      <Grid
        container
        size={{ xs: 12, sm: 8 }}
        component={Box}
        justifyContent="end"
      >
        <FooterLinks
          links={[
            { title: "LiaraDB", href: "/" },
            { title: "About us", href: "/about-us" },
            { title: "Get started", href: "/get-started" },
            { title: "Documentation", href: "/docs" },
            { title: "Use cases", href: "/use-cases" },
            { title: "Features", href: "/features" },
            { title: "License", href: "/license" },
          ]}
        />
      </Grid>
    </Grid>
  );
};
