import { ErrorBoundary } from "../../features/errorBoundary";
import Navigation from "../../features/navigation";
import usePages from "../../hooks/usePages";
import appNotCreatedFallback from "../../uidata/app-pages-not-created-fallback";
import pagesLoaderFallback from "../../uidata/pagesLoaderFallback";
import renderPage from "../../util/components/renderPage";
import { usePagesStateValue } from "../provider";

export default function Page() {
  const pagesNavigationData = usePages();
  const loadingPages = usePagesStateValue("loaders.pages");
  const hasNavigationData = pagesNavigationData.length;

  if (loadingPages) renderPage(pagesLoaderFallback);

  if (!loadingPages && !hasNavigationData)
    return renderPage(appNotCreatedFallback);

  return (
    <ErrorBoundary>
      <Navigation navData={pagesNavigationData} />
    </ErrorBoundary>
  );
}
