import { Box } from "@mui/material";
import { FC } from "react";

export const Substack: FC<{
  size?: number;
  iconSize?: number;
  color?: string;
}> = ({ size = 24, iconSize = 18, color = "#ffffff" }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width={size}
    height={size}
  >
    <svg fill={color} width={iconSize} height={iconSize} viewBox="0 0 24 24">
      <path
        d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
        strokeWidth="1"
      />
    </svg>
  </Box>
);
