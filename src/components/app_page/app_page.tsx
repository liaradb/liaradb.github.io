import { Box, Container, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

export const AppPage: FC<{
  children?: ReactNode | ReactNode[];
  title: string;
}> = ({ children, title }) => {
  return (
    <Container>
      <Box>
        <Typography variant="h1">{title}</Typography>
      </Box>
      <Box>{children}</Box>
    </Container>
  );
};
