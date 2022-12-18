import React from "react";
import { Container } from "@mui/material";

import { usePagesStateValue } from "../pages/provider";

import renderText from "../util/renderText";
import renderStack from "../util/renderStack";

interface IDefaultLayout {
  children?: React.ReactNode;
  name: string;
}

export default function DefaultLayout({ children, name }: IDefaultLayout) {
  const pages = usePagesStateValue("pages");
  const pageTitle = React.useMemo(() => renderText(name, "h2"), [name]);
  return (
    <Container>
      {pageTitle}
      {children}
    </Container>
  );
}
