import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { HeaderIcons } from "./header_icons";

const title = "LiaraDB";

export const Header = () => {
  return (
    <Box>
      <AppBar position="fixed" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
