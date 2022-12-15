import React from "react";
import { Grid } from "@mui/material";
import renderComponents from "./renderComponents";
import BasicGrid from "./components/Grid";

export default function renderGrid({ components = [], spacing = 2 }: any) {
  const children = components.map((gridItem: any) =>
    renderComponents(gridItem)
  );
  // return (
  //   <Grid container spacing={spacing}>
  //     {children}
  //   </Grid>
  // );
  return <BasicGrid />;
}
