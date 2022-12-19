import * as React from "react";
import TextField from "@mui/material/TextField";
import MuiAutocomplete from "@mui/material/Autocomplete";

export default function Autocomplete({ options = [] , label="Choose wisely"}) {
  return (
    <MuiAutocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
