import { Box, Container, Toolbar } from "@mui/material";

import { Topics } from "./home/topics";
import { Hero } from "./home/hero";

export default function Home() {
  return (
    <>
      <Box sx={{ background: "#000" }}>
        <Toolbar />
      </Box>
      <Hero />
      <Box marginY={4}>
        <Container>
          <Topics />
        </Container>
      </Box>
    </>
  );
}
