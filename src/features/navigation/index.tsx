import { Switch } from "react-router-dom";
import { ErrorBoundary } from "../errorBoundary";
import useRoutes from "./useRoutes";

interface INavigation {
  navData: any[];
}

export default function Navigation({ navData = [] }: INavigation) {
  const routes = useRoutes(navData);
  return (
    <ErrorBoundary>
      <Switch>{routes}</Switch>
    </ErrorBoundary>
  );
}
