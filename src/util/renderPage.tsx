import React from "react";
import Dashboard from "../layouts/dashboard";
import renderBox from "./renderBox";

import renderComponents from "./renderComponents";
import renderGrid from "./renderGrid";
import renderStack from "./renderStack";

import Box from "@mui/material/Box";
import DefaultLayout from "../layouts/DefaultLayout";

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
        <React.Suspense fallback={<>Loading page...</>}>
          {children}
        </React.Suspense>
      );
    }
    case "dashboard": {
      const drawerLists = (opts as any)?.lists ?? [];
      return (
        <Box style={{ position: "absolute", width:100 }}>
          <Dashboard  drawer={null}>{children}</Dashboard>;
        </Box>
      );
    }
    default: {
      return <DefaultLayout name={name}>{children}</DefaultLayout>;
    }
  }
}
