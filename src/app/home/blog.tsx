import { Box, Typography } from "@mui/material";

import Entries from "../blog/entries";
import { LinkButton } from "@/components";
import { ArrowForward } from "@mui/icons-material";

export function Blog() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        marginTop={3}
        marginBottom={1}
      >
        <Box flexGrow={1}>
          <Typography variant="h2">Blog</Typography>
        </Box>
        <LinkButton href="/blog" color="info" endIcon={<ArrowForward />}>
          View all
        </LinkButton>
      </Box>
      <Entries />
    </>
  );
}
