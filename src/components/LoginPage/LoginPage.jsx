import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import './LoginPage.css';

// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Paper, TextField, Typography, } from '@mui/material';

function LoginPage() {
  const [heading, setHeading] = useState(' ');
  const history = useHistory();

  return (<>
  <div className="moveDown2"></div>
  <Box container className="test2">
  <div> 
      <h2 className="heading2">{heading}</h2>
      
    </div>
      <LoginForm className="form" />

      <center>

        <Typography
          color="white"
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            // history.push('/registration');
            history.push('/home');
          }}
        >
          Register
        </Typography>


      </center>
      <br></br>
    </Box>
    </>
  );
}

export default LoginPage;
