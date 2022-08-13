import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';


// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Paper, TextField, Typography, } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (<>
  <div className="moveDown"></div>
    <div>
      <LoginForm />

      <center>

        <Typography
          color="white"
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Typography>


      </center>
      <br></br>
    </div>
    </>
  );
}

export default LoginPage;
