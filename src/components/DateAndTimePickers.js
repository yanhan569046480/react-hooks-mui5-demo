import React from 'react';
import { TextField } from '@mui/material';

export default function DateAndTimePickers() {
  return (
    <form style={{
      display: 'flex',
      flexWrap: 'wrap',
    }} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        style={{
          marginLeft: '8px',
          marginRight: '8px',
          width: 200,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
