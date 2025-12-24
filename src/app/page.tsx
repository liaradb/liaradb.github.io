import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { Header } from "./header";

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

const callToAction = "Try it now";
const pricing = "Pricing";

const Content = () => {
  return (
    <Box flexGrow={1}>
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
      <Box marginY={4}>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }} component={Card}>
              <CardContent>
                <Typography variant="h5">Features</Typography>
              </CardContent>
              <CardActions>
                <Button color="info" size="medium" endIcon={<ArrowForward />}>
                  Learn More
                </Button>
              </CardActions>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} component={Card}>
              <CardContent>
                <Typography variant="h5">Use cases</Typography>
              </CardContent>
              <CardActions>
                <Button color="info" size="medium" endIcon={<ArrowForward />}>
                  Learn More
                </Button>
              </CardActions>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} component={Card}>
              <CardContent>
                <Typography variant="h5">Docs</Typography>
              </CardContent>
              <CardActions>
                <Button color="info" size="medium" endIcon={<ArrowForward />}>
                  Learn More
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box>
      <Divider />
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Footer
      </Box>
    </Box>
  );
};
