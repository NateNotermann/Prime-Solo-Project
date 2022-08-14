import React from 'react';
import { useDispatch } from 'react-redux';

// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Paper, TextField, Typography, } from '@mui/material';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Button
    variant='outlined'
    // variant='text'
    // variant='string'
    // variant='contained'
    color="third"
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      // className={props.className}
      className={props.className} id='logout'
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
