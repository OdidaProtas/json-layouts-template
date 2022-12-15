import * as React from "react";
import Box from "@mui/material/Box";
import MUIRating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Rating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <MUIRating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
