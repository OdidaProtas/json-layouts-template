import React from "react";
import { Container } from "@mui/material";

import { usePagesStateValue } from "../pages/provider";

import renderText from "../util/components/renderText";
import renderLink from "../util/components/renderLink";
import renderStack from "../util/components/renderStack";

interface IDefaultLayout {
  children?: React.ReactNode;
  name: string;
}

export default function DefaultLayout({ children, name }: IDefaultLayout) {
  const pages = usePagesStateValue("pages");
  const pageTitle = React.useMemo(() => renderText(name, "h2"), [name]);
  const linkToPages = React.useMemo(
    () => pages.map((page: any) => renderLink(page.name, page.path)),
    [pages]
  );
  const linkStack = React.useMemo(
    () => renderStack(linkToPages),
    [linkToPages]
  );
  return (
    <Container>
      {pageTitle}
      {children}
      {linkStack}
    </Container>
  );
}
