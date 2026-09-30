"use client";
import { createTheme } from "@mui/material/styles";

export const ColorDark = "hsla(253,16%,7%,1)";
export const ColorPurple = "hsla(265,96%,27%,0.5)";
export const ColorOrange = "hsla(26,96%,45%,0.3)";
export const ColorBlue = "hsla(225,39%,30%,1)";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(100, 100, 234)",
    },
    secondary: {
      main: "rgb(229, 229, 234)",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: 56,
      fontWeight: 400,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 32,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#000030",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        sx: {
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: "1000px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
