import { Stack } from "@mui/material";
import React from "react";

export default function renderStack(children: React.ReactNode, spacing = 3) {
  return (
    <Stack sx={{ textAlign: "inherit" }} spacing={spacing}>
      {children}
    </Stack>
  );
}