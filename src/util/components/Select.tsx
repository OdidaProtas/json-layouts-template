import React from "react";

import MuiSelect from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import renderMenuItem from "../renderMenuItem";

export default function Select({
  options = [],
  loadingOptions = false,
  label,
  handleChange,
}: any) {
  const items = React.useMemo(
    () =>
      options.map((option: any) => renderMenuItem(option.label, option.value)),
    [...options]
  );
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        onChange={handleChange}
      >
        {items}
      </MuiSelect>
    </FormControl>
  );
}
