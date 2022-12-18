import useApps from "../hooks/useApps";
import usePages from "../hooks/usePages";
import useTheme from "../hooks/useTheme";
import appsLoaderFallback from "../uidata/appsLoaderFallback";
import appsNotFoundFallback from "../uidata/appsNotFoundFallback";
import renderPage from "../util/renderPage";

import Page from "./page";

import { ThemeProvider } from "@mui/material";
import { usePagesStateValue } from "./provider";
import appList from "../uidata/app-list";

export default function Pages() {
  const apps = useApps();
  const appsLoaded = Boolean(apps);

  const loadingApps = usePagesStateValue("loaders.apps");
  const activeAppId = usePagesStateValue("appId");

  const noActiveApp = !Boolean(activeAppId);

  usePages();
  const theme = useTheme();

  if (loadingApps) return renderPage(appsLoaderFallback);
  if (appsLoaded && noActiveApp) return renderPage(apps);
  if (!appsLoaded) return renderPage(appsNotFoundFallback);

  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}
