import Navigation from "../../features/navigation";
import usePages from "../../hooks/usePages";
import { usePagesStateValue } from "../provider";

export default function Page() {
  const pagesNavigationData = usePages();
  const loadingPages = usePagesStateValue("loaders.pages");
  if (loadingPages) <>Loading pages...</>;
  return <Navigation navData={pagesNavigationData} />;
}
