import * as React from "react";
import Box from "@mui/material/Box";
import MUIRating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Rating({ initialValue = 3 }) {
  const [value, setValue] = React.useState<number | null>(Number(initialValue));

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
