import React from "react";
import { Route, Switch } from "react-router-dom";
import renderPage from "../../util/renders/renderPage";

interface INavigation {
  navData: any[];
}

export default function Navigation({ navData = [] }: INavigation) {
  const routes = React.useMemo(
    () =>
      navData.map((route, index) => {
        return (
          <Route
            exact={route.exact}
            key={index}
            component={() => renderPage(route.page)}
            path={route.path}
          />
        );
      }),
    []
  );
  return <Switch>{routes}</Switch>;
}
