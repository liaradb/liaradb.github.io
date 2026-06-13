import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

import { Docker } from "../icons";

export const HeaderIcons = () => {
  return (
    <Box display="flex">
      <IconButton
        LinkComponent="a"
        href="https://github.com/liaradb"
        target="_blank"
        title="GitHub"
      >
        <GitHub />
      </IconButton>
      <IconButton
        LinkComponent="a"
        href="https://hub.docker.com/u/liaradb"
        target="_blank"
        title="Docker Hub"
      >
        <Docker />
      </IconButton>
      <IconButton
        LinkComponent="a"
        href="https://www.linkedin.com/company/liaradb/"
        target="_blank"
        title="LinkedIn"
      >
        <LinkedIn />
      </IconButton>
    </Box>
  );
};
