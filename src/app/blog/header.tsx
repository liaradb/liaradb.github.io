import { Box, Typography } from "@mui/material";

export const Header = () => (
  <Box
    sx={{
      width: "100%",
      height: 200,
      backgroundColor: "#000",
    }}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Typography variant="h2" component="span">
      LiaraDB
    </Typography>
  </Box>
);
