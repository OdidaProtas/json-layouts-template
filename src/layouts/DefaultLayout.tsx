import React from "react";
import renderText from "../util/renders/renderText";

interface IDefaultLayout {
  children?: React.ReactNode;
  name: string;
}

export default function DefaultLayout({ children, name }: IDefaultLayout) {
  const text = React.useMemo(() => renderText(name, "h2"), [name]);
  return (
    <>
      {text}
      {children}
    </>
  );
}
