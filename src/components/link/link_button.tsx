"use client";

import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

export const LinkButton: FC<ButtonProps> = (props) => {
  return <Button {...props} LinkComponent={Link}></Button>;
};
