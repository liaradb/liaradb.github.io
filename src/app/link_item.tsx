"use client";

import { Box, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

export const LinkItem: FC<{ href: string; title: string }> = ({
  href,
  title,
}) => (
  <Box component="li" padding={0} margin={0} sx={{ listStyleType: "none" }}>
    <MuiLink
      color="info"
      href={href}
      sx={{ textDecoration: "none" }}
      component={Link}
    >
      {title}
    </MuiLink>
  </Box>
);
