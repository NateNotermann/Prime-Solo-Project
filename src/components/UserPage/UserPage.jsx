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
    <div className="moveDown"></div>
    <h2>Browse All Comedians</h2>
    <div className="container">
      <Typography>Welcome, {user.username}!</Typography>
      <br></br>


      
      <Grid container className="GridContainerMapper" xs={6} sm={6} md={3}>
  <section className="listAllComedians">
    {listAllComedians && listAllComedians.map(comedian => {
      return (
        // <div key={comedian.id} onClick={() => clickIcon (comedian.id)}> 
        <div key={comedian.id}> 
        <ComedianItem comedianProp={comedian}/>
        </div>
      );
    })}
  </section>
  </Grid>
      {/* <Typography>Your ID is: {user.id}</Typography> */}
      {/* <LogOutButton className="btn" /> */}
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default Browse;
