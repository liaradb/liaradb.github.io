import { Box, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

import { HeaderIcons } from "./header_icons";
import { HeaderAppBar } from "./header_app_bar";
import { MenuDrawer } from "./menu_drawer";

const title = "LiaraDB";

export const Header = () => {
  return (
    <Box>
      <HeaderAppBar>
        <Toolbar component={Container}>
          <MenuDrawer />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              "& > a": {
                textDecoration: "none",
                color: "inherit",
                "&:visited": {
                  color: "inherit",
                },
                "&:active": {
                  color: "inherit",
                },
              },
            }}
          >
            <Link href="/">{title}</Link>
          </Typography>
          <HeaderIcons />
        </Toolbar>
      </HeaderAppBar>
    </Box>
  );
};
