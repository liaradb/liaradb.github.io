import Image from "next/image";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
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

const Content = () => {
  return (
    <Container>
      <Typography variant="h1">LiaraDB</Typography>
      <Typography variant="subtitle1" sx={{ fontSize: 36 }}>
        Event Sourcing database
      </Typography>
      <Grid container spacing={2} marginY={2}>
        <Grid size={8} component={Paper} padding={2}>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </Grid>
        <Grid size={4} component={Paper} padding={2}>
          <Button variant="contained" color="success" size="large">
            {callToAction}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
