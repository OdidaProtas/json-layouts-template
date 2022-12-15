import * as React from "react";
import Button from "@mui/material/Button";
import MUIButtonGroup from "@mui/material/ButtonGroup";

export default function ButtonGroup() {
  return (
    <MUIButtonGroup
      variant="contained"
      aria-label="outlined primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </MUIButtonGroup>
  );
}
