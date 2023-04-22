import { TextField } from '@mui/material';
import React from 'react'

export default function TableSearch({filter, setFilter}) {

    const _handleChange = e => setFilter(e.target.value);

  return (
    <TextField 
        value={filter}
        onChange={_handleChange}
        variant='standard'
    />
  )
}
