"use client";

import { CardActionArea } from "@mui/material";
import Link from "next/link";
import { FC, ReactNode } from "react";

export const LinkCardActionArea: FC<{
  href: string;
  children?: ReactNode | ReactNode[];
}> = ({ href, children }) => {
  return (
    <CardActionArea
      LinkComponent={Link}
      href={href}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "stretch",
      }}
    >
      {children}
    </CardActionArea>
  );
};
