import * as React from "react";
import Button from "@mui/material/Button";
import MUIButtonGroup from "@mui/material/ButtonGroup";

export default function ButtonGroup({options=[]}) {
  return (
    <MUIButtonGroup
      variant="contained"
      aria-label="outlined primary button group"
    >
      {options.map((option) => {
        return <Button key={option.value}>{option.value}</Button>;
      })}
    </MUIButtonGroup>
  );
}
