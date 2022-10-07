import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch } from 'react-redux';

// ------ MUI ELEMENTS ------ //
import { Box, Button, Grid, TextField, Typography } from '@mui/material'; 
import { useEffect, useState } from 'react';

import ComedianItem from '../ComedianItem/ComedianItem.jsx';

function Browse() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const listAllComedians = useSelector(store => store.allComediansReducerStore);
  const dispatch = useDispatch();




  useEffect(() => {
    dispatch({ type: 'GET_ALL_COMEDIANS' });
  }, []);



  return (<>
  <Box className="mainBox">
    <div className="moveDown"></div>
    <center>  
    <h2 className="h2test">Browse All Comedians</h2>
    </center>

    {/* <center>  
          <Typography>Welcome, {user.name}!</Typography>
      </center> */}

      <br></br>


      
      <Grid container className="GridContainerMapper" 
         direction="row"
        //  justifyContent="space-evenly"
         justifyContent="space-evenly"
         alignItems="flex-start"
         spacing={3}
         rowSpacing={4}
      >
        {/* <Typography> in first grid container</Typography> */}

    {listAllComedians && listAllComedians.map(comedian => {
      return (
        // <div key={comedian.id} onClick={() => clickIcon (comedian.id)}> 
        <Grid item key={comedian.id}> 
        <ComedianItem comedianProp={comedian}/>
        </Grid>
      );
    })}

  </Grid>
  
    </Box>
    <br></br>
    </>
  );
}

{/* <Typography>Your ID is: {user.id}</Typography> */}
{/* <LogOutButton className="btn" /> */}

// this allows us to use <App /> in index.js
export default Browse;
