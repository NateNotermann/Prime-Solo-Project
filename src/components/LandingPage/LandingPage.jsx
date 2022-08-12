import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

// ------ MUI ELEMENTS ------ //
import { Box, Button, Grid, TextField, Typography } from '@mui/material';


function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Box container className="test">
    <div> 
      <h2 className="heading">{heading}</h2>
      
    </div>
      <Grid container 
      className="GridContainer"
        
        direction="column"
        justifyContent="center"
        alignItems="center">
          
    

        <Grid item
          alignItems="center">
          <RegisterForm />
        </Grid>


        <Grid container
          direction="column"
          alignItems="center">
            
          <Typography color="white">Already a Member?</Typography>
          
          <Button 
          variant="contained" 
          className="btn btn_sizeSm" 
          onClick={onLogin}>
          Login
          </Button>

        </Grid>


      </Grid>
    </Box>
  );
}

export default LandingPage;
