import { Box, Container, Divider, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

const baseTitle = "LiaraDB";

export const appTitle = (title: string) => `${title} - ${baseTitle}`;

export const AppPage: FC<{
  children?: ReactNode | ReactNode[];
  title: string;
}> = ({ children, title }) => {
  return (
    <>
      <Box component={Container} paddingY={2}>
        <Typography variant="h1">{title}</Typography>
      </Box>
      <Divider />
      <Box component={Container}>{children}</Box>
    </>
  );
};
