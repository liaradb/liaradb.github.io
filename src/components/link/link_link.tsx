"use client";

import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link as MuiLink } from "@mui/material";
import Link from "next/link";

export const LinkLink: FC<{
  href: string;
  children?: ReactNode | ReactNode;
  target?: HTMLAttributeAnchorTarget;
}> = ({ href, children, target }) => (
  <MuiLink
    color="info"
    href={href}
    sx={{ textDecoration: "none" }}
    component={Link}
    target={target}
  >
    {children}
  </MuiLink>
);
