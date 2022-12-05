import { ThemeProvider } from "@mui/material";
import usePages from "../hooks/usePages";
import useTheme from "../hooks/useTheme";
import Page from "./page";

export default function Pages() {
  usePages();
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}
