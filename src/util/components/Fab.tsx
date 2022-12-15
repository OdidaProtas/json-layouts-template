import * as React from "react";
import Box from "@mui/material/Box";
import MUIFab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function Fab() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <MUIFab color="primary" aria-label="add">
        <AddIcon />
      </MUIFab>
    </Box>
  );
}
