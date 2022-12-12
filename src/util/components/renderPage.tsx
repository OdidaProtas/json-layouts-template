import React from "react";
import { ErrorBoundary } from "../../features/errorBoundary";

const Dashboard = React.lazy(() => import("../../layouts/dashboard"));
const DefaultLayout = React.lazy(() => import("../../layouts/DefaultLayout"));

import renderComponents from "./renderComponents";
import renderDrawer from "./renderDrawer";
import renderGrid from "./renderGrid";
import renderStack from "./renderStack";

interface Ipage {
  layout: string;
  name: string;
  opts: any;
  components: any[];
}

const defaultPageProps = { layout: "", name: "Page", components: [], opts: {} };

export default function renderPage(page: Ipage = defaultPageProps) {
  const { layout, components, name, opts } = page;

  const children = renderStack(renderComponents(components));

  switch (layout) {
    case "page": {
      return (
        <ErrorBoundary>
          <React.Suspense fallback={<>Loading page...</>}>
            {children}
          </React.Suspense>
        </ErrorBoundary>
      );
    }
    case "dashboard": {
      const drawerLists = (opts as any)?.lists ?? [];
      return (
        <ErrorBoundary>
          <React.Suspense fallback={<>Loading page...</>}>
            <Dashboard drawer={renderDrawer(drawerLists)}>{children}</Dashboard>
          </React.Suspense>
        </ErrorBoundary>
      );
    }
    default: {
      return (
        <ErrorBoundary>
          <React.Suspense fallback={<>Loading page...</>}>
            <DefaultLayout name={name}>{children}</DefaultLayout>
          </React.Suspense>
        </ErrorBoundary>
      );
    }
  }
}
