import { ErrorBoundary } from "../../features/errorBoundary";
import Navigation from "../../features/navigation";
import usePages from "../../hooks/usePages";
import appNotCreatedFallback from "../../uidata/app-pages-not-created-fallback";
import pagesLoaderFallback from "../../uidata/pagesLoaderFallback";
import { usePagesStateValue } from "../provider";

import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import renderPage from "../../util/renderPage";

export default function Page() {
  const pagesNavigationData = usePages();
  const loadingPages = usePagesStateValue("loaders.pages");
  const hasNavigationData = pagesNavigationData.length;

  if (loadingPages) return renderPage(pagesLoaderFallback);

  if (!loadingPages && !hasNavigationData)
    return renderPage(appNotCreatedFallback);
    
  return (
    <ErrorBoundary>
      <Navigation navData={pagesNavigationData} />
      <CloseApp />
    </ErrorBoundary>
  );
}

const fabStyle = {
  position: "absolute",
  top: 16,
  right: 16,
};

export function CloseApp() {
  const appId = usePagesStateValue("appId");
  const { closeApp } = useActions();
  if (!appId) return null;
  return (
    <Fab onClick={closeApp} sx={fabStyle} aria-label={"click to close app"}>
      <CloseIcon />
    </Fab>
  );
}

function useActions() {
  const dispatch = usePagesStateValue("dispatch");
  return {
    closeApp() {
      dispatch({
        type: "update_all",
        payload: null,
        key: "appId",
      });
      dispatch({
        type: "update_all",
        payload: [],
        key: "pages",
      });
    },
  };
}
