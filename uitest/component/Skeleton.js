
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const  SkeletonComp=()=> {
  return (
    <Stack spacing={1} >
      {/* For variant="text", adjust the height via font-size */}
      
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton  animation="wave" fullWidth height={20} />
    </Stack>
  );
}
export default SkeletonComp;