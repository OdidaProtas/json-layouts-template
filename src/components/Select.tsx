import React from "react";

import MuiSelect from "@mui/material/Select";

import renderMenuItem from "../util/components/renderMenuItem";

export default function Select({ options = [], loadingOptions = false }: any) {
  const items = React.useMemo(
    () =>
      options.map((option: any) => renderMenuItem(option.label, option.value)),
    options
  );
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Role</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Role"
        onChange={""}
      >
        {items}
      </MuiSelect>
    </FormControl>
  );
}
