import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { LinkButton } from "@/components";

import { Example } from "./example";

export const Hero = () => {
  return (
    <Box bgcolor="black" paddingY={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }} padding={2}>
            <Title />
            <Subtitle />
            <Box display="flex" gap={1}>
              <TryItNow />
              <Pricing />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={Card}
            variant="outlined"
            minHeight={200}
          >
            <Example />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Title = () => <Typography variant="h1">LiaraDB</Typography>;

const Subtitle = () => (
  <Typography variant="subtitle1" sx={{ fontSize: 36 }}>
    Event Sourcing database
  </Typography>
);

const callToAction = "Get started";

const TryItNow = () => {
  return (
    <LinkButton
      variant="contained"
      color="info"
      size="large"
      endIcon={<ArrowForward />}
      href="/get-started"
    >
      {callToAction}
    </LinkButton>
  );
};

const pricing = "Docs";

const Pricing = () => {
  return (
    <LinkButton variant="outlined" color="info" size="large" href="/docs">
      {pricing}
    </LinkButton>
  );
};
