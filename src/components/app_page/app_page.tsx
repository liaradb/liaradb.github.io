import { Box, Container, Divider, Toolbar, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

const baseTitle = "LiaraDB";

export const appTitle = (title: string) => `${title} - ${baseTitle}`;

export const AppPage: FC<{
  children?: ReactNode | ReactNode[];
  title: string;
  subTitle?: string;
}> = ({ children, title, subTitle }) => {
  return (
    <>
      <Box>
        <Toolbar />
      </Box>
      <Box component={Container} paddingY={2}>
        <Typography variant="h1">{title}</Typography>
        {subTitle && <Typography variant="h5">{subTitle}</Typography>}
      </Box>
      <Divider />
      <Box
        component={Container}
        display="flex"
        flexDirection="column"
        gap={2}
        marginTop={2}
        marginBottom={4}
      >
        {children}
      </Box>
    </>
  );
};
