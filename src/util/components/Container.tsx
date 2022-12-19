import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import renderComponents from "../renderComponents";

export default function SimpleContainer({ components = [] }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">{renderComponents(components)}</Container>
    </React.Fragment>
  );
}
