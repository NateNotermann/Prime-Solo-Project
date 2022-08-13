import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';


// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Paper, TextField, Typography, } from '@mui/material';


function RegisterPage() {
  const history = useHistory();

  return (<>
  <div className="moveDown"></div>
    <div>
      <RegisterForm />

      <center>
        <Typography variant="contained"
        
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Typography>
      </center>
      <br></br>
    </div>
    </>
  );
}

export default RegisterPage;
