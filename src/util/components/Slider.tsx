import * as React from 'react';
import Box from '@mui/material/Box';
import MuiSlider from '@mui/material/Slider';

export default function Slider() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <MuiSlider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
