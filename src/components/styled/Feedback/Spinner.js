import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Spinner = () => {
  return (
    <Box display="flex" flexGrow={1} justifyContent="center">
      <CircularProgress color="secondary" size={96}/>
    </Box>
  )
}