import { Typography } from "@mui/material";

export default function renderText(text: string, variant: string = "body1") {
  return <Typography variant={variant as any}>{text}</Typography>;
}