import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import renderComponents from "../renderComponents";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({ components, spacing }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={spacing}>
        {components.map((component, index) => {
          return (
            <Grid item xs={component.xs ?? true} key={index}>
              {renderComponents([component])}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}