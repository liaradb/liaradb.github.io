"use client";

import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

export const LinkButton: FC<ButtonProps> = (props) => {
  return <Button {...props} LinkComponent={Link}></Button>;
};
