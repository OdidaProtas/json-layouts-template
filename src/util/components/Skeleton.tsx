import * as React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Skeleton() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <MuiSkeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <MuiSkeleton variant="circular" width={40} height={40} />
      <MuiSkeleton variant="rectangular" width={210} height={60} />
      <MuiSkeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}
