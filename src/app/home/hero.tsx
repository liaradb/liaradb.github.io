import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { GitHub, RocketLaunch } from "@mui/icons-material";

import { LinkButton } from "@/components";

import { ExampleTabs } from "./example_tabs";
import { Logo } from "./logo";

export const Hero = () => {
  return (
    <Box
      bgcolor="black"
      paddingY={4}
      sx={{
        backgroundColor: "#0F0F0F",
        backgroundImage: `
          radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
          radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
          radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%),
          radial-gradient(at 80% 50%, hsla(26,96%,45%,0.3) 0, transparent 50%),
          radial-gradient(at 0% 100%, hsla(265,96%,27%,0.5) 0, transparent 50%),
          radial-gradient(at 80% 100%, hsla(265,30%,20%,0.5) 0, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343,100%,76%,0.05) 0, transparent 50%);
        `,
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }} padding={2}>
            <Title />
            <Subtitle />
            <Headline />
            <Box display="flex" gap={1} marginY={1}>
              <TryItNow />
              <ViewOnGitHub />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={Card}
            variant="outlined"
            minHeight={200}
          >
            <ExampleTabs />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Title = () => (
  <Box display="flex" gap={1}>
    <Logo size={65} color="white" />
    <Typography variant="h1">LiaraDB</Typography>
  </Box>
);

const Subtitle = () => (
  <Typography variant="subtitle1" sx={{ fontSize: 36 }}>
    Event Sourcing database
  </Typography>
);

const Headline = () => (
  <Typography variant="body1">
    Event-native database, to power Event Sourced workflows for Microservices
    with Domain Driven Design.
  </Typography>
);

const callToAction = "Get started";

const TryItNow = () => {
  return (
    <LinkButton
      variant="contained"
      color="info"
      size="large"
      endIcon={<RocketLaunch />}
      href="https://docs.liaradb.com/docs/get-started"
    >
      {callToAction}
    </LinkButton>
  );
};

const viewOnGitHub = "View on GitHub";

const ViewOnGitHub = () => {
  return (
    <Button
      variant="outlined"
      color="info"
      size="large"
      href="https://github.com/liaradb"
      LinkComponent="a"
      target="_blank"
      endIcon={<GitHub />}
    >
      {viewOnGitHub}
    </Button>
  );
};
