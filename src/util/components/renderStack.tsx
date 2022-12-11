import { Stack } from "@mui/material";
import React from 'react'

export default function renderStack(children: React.ReactNode, spacing = 2) {
  return <Stack spacing={spacing}>{children}</Stack>;
}
