import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SearchBar.scss';
export default function SearchBar() {
  return (
    <div className='searchBar'>
        <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth  id="outlined-basic" label="Recherche" variant="outlined" />
    </Box>
    </div>
  )
}