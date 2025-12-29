import { Box, Container, Toolbar } from "@mui/material";

import { Blog } from "./blog";
import { Hero } from "./hero";
import { Topics } from "./topics";

export function Home() {
  return (
    <>
      <Box sx={{ background: "#000" }}>
        <Toolbar />
      </Box>
      <Hero />
      <Box component={Container} marginY={4}>
        <Topics />
        <Blog />
      </Box>
    </>
  );
}
