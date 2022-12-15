import List from "@mui/material/List";
import React from "react";

export default function renderList({
  children,
}: {
  children: React.ReactNode | null;
}) {
  return <List>{children}</List>;
}