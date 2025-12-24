import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const callToAction = "Try it now";
const pricing = "Pricing";

export const Hero = () => {
  return (
    <Box bgcolor="black" paddingY={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }} padding={2}>
            <Typography variant="h1">LiaraDB</Typography>
            <Typography variant="subtitle1" sx={{ fontSize: 36 }}>
              Event Sourcing database
            </Typography>
            <Box display="flex" gap={1}>
              <Button
                variant="contained"
                color="info"
                size="large"
                endIcon={<ArrowForward />}
              >
                {callToAction}
              </Button>
              <Button variant="outlined" color="info" size="large">
                {pricing}
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={Card}
            variant="outlined"
            minHeight={200}
          ></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
