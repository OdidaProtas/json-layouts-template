import * as React from "react";
import MUIToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButton() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <MUIToggleButton value="web">Web</MUIToggleButton>
      <MUIToggleButton value="android">Android</MUIToggleButton>
      <MUIToggleButton value="ios">iOS</MUIToggleButton>
    </ToggleButtonGroup>
  );
}
