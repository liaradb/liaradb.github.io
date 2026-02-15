import { Box, Container } from "@mui/material";

import { Blog } from "./blog";
import { Hero } from "./hero";
import { Topics } from "./topics";

export function Home() {
  return (
    <>
      <Hero />
      <Box component={Container} marginY={4}>
        <Topics />
        <Blog />
      </Box>
    </>
  );
}
