import { Box, Container, Toolbar } from "@mui/material";

import { Blog } from "./home/blog";
import { Hero } from "./home/hero";
import { Topics } from "./home/topics";

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
      <Blog />
    </>
  );
}
