import { AppBar, Toolbar } from "@mui/material";

import { FC, ReactNode } from "react";
import { HeaderScroll } from "./header_scroll";

export const HeaderAppBar: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  return (
    <>
      <HeaderScroll />
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{ opacity: "calc(var(--scroll-percentage) * 1%)}" }}
      >
        <Toolbar></Toolbar>
      </AppBar>
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{ background: "none", boxShadow: "none" }}
      >
        {children}
      </AppBar>
    </>
  );
};
