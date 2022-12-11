import useApps from "../hooks/useApps";
import usePages from "../hooks/usePages";
import useTheme from "../hooks/useTheme";
import appsLoaderFallback from "../uidata/appsLoaderFallback";
import appsNotFoundFallback from "../uidata/appsNotFoundFallback";
import renderPage from "../util/components/renderPage";

import Page from "./page";

import { ThemeProvider } from "@mui/material";
import { usePagesStateValue } from "./provider";

export default function Pages() {
  const apps = useApps();
  const appsLoaded = apps.length;

  const loadingApps = usePagesStateValue("loaders.apps");

  usePages();
  const theme = useTheme();

  if (loadingApps) return renderPage(appsLoaderFallback);
  if (!appsLoaded) return renderPage(appsNotFoundFallback);

  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}
