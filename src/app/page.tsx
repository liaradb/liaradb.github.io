import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { Header } from "./header";

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

const callToAction = "Try it now";
const pricing = "Pricing";

const Content = () => {
  return (
    <Box>
      <Box bgcolor="black" paddingY={4} marginBottom={4}>
        <Container>
          <Grid container spacing={2}>
            <Grid size={6} padding={2}>
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
            <Grid size={6} component={Card} variant="outlined"></Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid size={4} component={Card}>
            <CardContent>
              <Typography variant="h5">Features</Typography>
            </CardContent>
            <CardActions>
              <Button color="info" size="medium" endIcon={<ArrowForward />}>
                Learn More
              </Button>
            </CardActions>
          </Grid>
          <Grid size={4} component={Card}>
            <CardContent>
              <Typography variant="h5">Use cases</Typography>
            </CardContent>
            <CardActions>
              <Button color="info" size="medium" endIcon={<ArrowForward />}>
                Learn More
              </Button>
            </CardActions>
          </Grid>
          <Grid size={4} component={Card}>
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
  );
};
