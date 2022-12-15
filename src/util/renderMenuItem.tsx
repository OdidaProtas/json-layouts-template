import MenuItem from "@mui/material/MenuItem";

export default function renderMenuItem(label: string, value: any) {
  return <MenuItem value={value}>{label}</MenuItem>;
}