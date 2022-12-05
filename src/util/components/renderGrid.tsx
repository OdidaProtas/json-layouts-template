import React from "react";
import { Grid } from "@mui/material";
import renderGridItem from "./renderGridItem";

export default function renderGrid(items: any[], spacing = 2) {
  const children = items.map((grid: any) => renderGridItem(grid.components));
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  );
}
