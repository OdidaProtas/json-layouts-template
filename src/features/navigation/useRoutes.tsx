import React from "react";
import { Route } from "react-router-dom";
import renderPage from "../../util/renderPage";

export default function useRoutes(navData: any) {
  return React.useMemo(
    () =>
      navData.map((route: any, index: number) => {
        return (
          <Route
            key={index}
            element={(() => renderPage(route))()}
            path={route.path}
          />
        );
      }),
    [navData]
  );
}