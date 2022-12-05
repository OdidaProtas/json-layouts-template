import { Stack } from "@mui/material";

export default function renderStack(children, spacing = 2) {
  return <Stack spacing={spacing}>{children}</Stack>;
}
