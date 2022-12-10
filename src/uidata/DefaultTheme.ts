import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#0A1045",
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#fff5f8",
      main: "#F9E900",
      dark: "#e62958",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
};

export const defaultTheme = {
  ...rawTheme
};

