import React from "react";
import Box from "@mui/material/Box";

export default function renderBox(children: React.ReactNode, sx: any = {}) {
  return <Box sx={sx}>{children}</Box>;
}
