import { Switch } from "react-router-dom";
import PagesLoadFail from "../../uidata/PagesLoadFail";
import renderPage from "../../util/components/renderPage";
import useRoutes from "./useRoutes";

interface INavigation {
  navData: any[];
}

export default function Navigation({ navData = [] }: INavigation) {
  const hasPages = navData.length;
  const routes = useRoutes(navData);

  if (!hasPages) return renderPage(PagesLoadFail);
  return <Switch>{routes}</Switch>;
}
