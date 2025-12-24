import { Box, Container } from "@mui/material";

import { Topics } from "./home/topics";
import { Hero } from "./home/hero";

export default function Home() {
  return (
    <Box flexGrow={1}>
      <Hero />
      <Box marginY={4}>
        <Container>
          <Topics />
        </Container>
      </Box>
    </Box>
  );
}
