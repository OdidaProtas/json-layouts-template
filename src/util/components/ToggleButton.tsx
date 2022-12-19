import * as React from "react";
import MUIToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButton({ options = [] }) {
  const [alignment, setAlignment] = React.useState("");

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
      {options.map((option, index) => {
        return (
          <MUIToggleButton key={index} value={option.value}>
            {option.label}
          </MUIToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
