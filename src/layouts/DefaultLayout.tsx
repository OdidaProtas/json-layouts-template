import React from "react";

interface IDefaultLayout {
  children?: React.ReactNode;
}

export default function DefaultLayout({ children }: IDefaultLayout) {
  return <>{children}</>;
}
