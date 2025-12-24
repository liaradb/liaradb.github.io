import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

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
    <Button
      variant="contained"
      color="info"
      size="large"
      endIcon={<ArrowForward />}
      LinkComponent="a"
      href="/getstarted"
    >
      {callToAction}
    </Button>
  );
};

const pricing = "Docs";

const Pricing = () => {
  return (
    <Button
      variant="outlined"
      color="info"
      size="large"
      LinkComponent="a"
      href="/docs"
    >
      {pricing}
    </Button>
  );
};
