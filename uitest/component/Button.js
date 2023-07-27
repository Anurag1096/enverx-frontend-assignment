
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CustomButtons({handleClick,name,...props}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleClick?handleClick:null} {...props} >{name?name:"Button"}</Button>
    </Stack>
  );
}