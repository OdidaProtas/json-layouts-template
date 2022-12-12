import React from "react";
import { Grid } from "@mui/material";
import renderGridItem from "./renderGridItem";

export default function renderGrid({ components = [], spacing = 2 }: any) {
 
  console.log(components)
  const children = components.map((gridItem: any) =>
    renderGridItem(gridItem)
  );
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  );
}
