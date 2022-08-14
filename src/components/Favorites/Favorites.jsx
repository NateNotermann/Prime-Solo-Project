import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FavoriteItem from '../FavoriteItem/FavoriteItem';


// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Paper, TextField, Typography, } from '@mui/material';
import { positions } from '@mui/system';
import '../MUIElements/MUIElements.css';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';


function Favorites(props) {



  const user = useSelector(store => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const Favorites = useSelector((store) => store.Favorites);



  useEffect(() => {
    dispatch({
      type: 'GET_FAVORITES',
      payload: user.id,
    }); // TELL

    console.log('user.id', user.id);

  }, []);

  console.log('favorites', Favorites);
  return (<>
    <Box container className="mainBox">

      <div className="moveDown"></div>

      <center>
        <h2>{user.name}'s Favorites Page</h2>
        <br></br>
      </center>

      {/* <section className="favoritesList"> */}
      <Grid container className="GridContainerMapper"
        direction="row"
        // justifyContent="space-evenly"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
        rowSpacing={4}
      >
        {Favorites.map(favorite => {
          return (

            <Grid item key={favorite.id} className="comedian">
              <FavoriteItem favoriteProp={favorite} />
            </Grid>
          )
        })}


      </Grid>


    </Box>
    <br></br>
  </>
  );
}

export default Favorites;
