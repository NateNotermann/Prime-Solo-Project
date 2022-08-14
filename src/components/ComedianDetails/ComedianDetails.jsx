
import './ComedianDetails.css'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


import ComedianItem from '../ComedianItem/ComedianItem.jsx';

// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Link, Paper, TextField, Typography, Tooltip } from '@mui/material';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CoPresentIcon from '@mui/icons-material/CoPresent';

// -- Component to display just one comedians info -- //
function ComedianDetails() {

  const dispatch = useDispatch();
  const currentComedian = useSelector(store => store.CurrentComediansReducerStore);
  const space = ' ';
  const google = 'https://www.google.com/maps/search/';
  // const currentComedian = currentComedian[0];  
  const [heading, setHeading] = useState('Functional Component');

  // const Favorite = () => {
  //   console.log('Favorited comedian!', currentComedian.id);
  // };

  // const UnFavorite = () => {
  //   console.log('UnFavorited comedian', currentComedian.id);
  // };


  useEffect(() => {
    // dispatch({ type: 'GET_CURRENT_COMEDIAN' });
    // dispatch({ type: 'GET_ALL_COMEDIANS' });
  }, []);


  console.log('currentComedian', currentComedian);
  console.log('Comedian name is:', currentComedian.first_name, currentComedian.last_name);


  return (
    <>
      <Box container>

        <div className="moveDown"></div>
        
        <Grid container className="cdcontainer"
          justifyContent="space-evenly"
          alignItems="center"
        >
         <Grid container className="title"
                justifyContent="space-evenly"
                alignItems="center"
         >
        <h2 item align="center" >Comedian Details</h2>
      </Grid>
          
          <ComedianItem comedianProp={currentComedian} />
          {/* <h2>{currentComedian.first_name} {currentComedian.last_name} id: {currentComedian.id}</h2>
      <img className='icon'
        src={currentComedian.icon}
        alt={currentComedian.first_name} />
        <br></br>
        <button onClick={() => Favorite (currentComedian.id)}>Favorite</button>
        <button onClick={() => UnFavorite (currentComedian.id)}>UnFavorite</button>
        <br></br> */}


          <Grid container className="links"
            justifyContent="center"
            alignItems="center"
          >

            <Tooltip title='Instagram'>
              <Link color="inherit">
                <IconButton aria-label="settings">
                  <a href={currentComedian.instagram_link} className="link"
                    title="Google Maps" target="_blank">
                    <InstagramIcon color="secondary">
                    </InstagramIcon>
                  </a>
                </IconButton>
              </Link>
            </Tooltip>
          
            <Tooltip title='Twitter'>
              <Link color="inherit">
                <IconButton aria-label="settings">
                  <a href={currentComedian.twitter_link} className="link"
                    title="Google Maps" target="_blank">
                    <TwitterIcon color="primary">
                    </TwitterIcon>
                  </a>
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title='Youtube'>
              <Link color="inherit">
                <IconButton aria-label="settings">
                  <a href={currentComedian.youtube_link} className="link"
                    title="Google Maps" target="_blank">
                    <YouTubeIcon color="youtube">
                    </YouTubeIcon>
                  </a>
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title='Comedians Website'>
              <Link color="inherit">
                <IconButton aria-label="settings">
                  <a href={currentComedian.youtube_link} className="link"
                    title="Google Maps" target="_blank">
                    <CoPresentIcon color="primary">
                    </CoPresentIcon>
                  </a>
                </IconButton>
              </Link>
            </Tooltip>


            {/* <Tooltip title={currentComedian.city}>
              <Link color="inherit">
                <IconButton aria-label="settings">
                  <a href={google + currentComedian.city} className="link"
                    title="Google Maps" target="_blank">
                    <LocationOnIcon color="forth">
                    </LocationOnIcon>
                  </a>
                </IconButton>
              </Link>
            </Tooltip> */}


          </Grid>

          <Typography item>Genre: {currentComedian.genre} </Typography>
          <Grid container className="links">
            <Typography 
            sx={{ padding: 5 }}
            className="description">{currentComedian.description}</Typography>
          </Grid>

        </Grid>

        
      </Box>
    </>
  )
}

export default ComedianDetails;

// eventual SQL Query: 
// SELECT * from comedians WHERE id = $1; 







// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
