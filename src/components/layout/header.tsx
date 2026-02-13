import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

import { HeaderIcons } from "./header_icons";
import { MenuDrawer } from "./menu_drawer";

const title = "LiaraDB";

export const Header = () => {
  return (
    <Box>
      <AppBar position="fixed" enableColorOnDark>
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
      </AppBar>
    </Box>
  );
};
