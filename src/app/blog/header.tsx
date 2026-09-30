import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

export const Header: FC<{ src?: string }> = ({ src }) => (
  <Box
    sx={{
      width: "100%",
      height: 200,
      backgroundColor: "#000",
    }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="relative"
  >
    {src ? (
      <Image
        src={src}
        alt=""
        fill
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
    ) : (
      <Typography variant="h2" component="span">
        LiaraDB
      </Typography>
    )}
  </Box>
);
