

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

import './SearchPage.css'

// -- react imports -- //
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

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
import SearchIcon from '@mui/icons-material/Search';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function SearchPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const listAllComedians = useSelector(store => store.allComediansReducerStore);
  const user = useSelector((store) => store.user);
  const search = useSelector(store => store.searchReducer);

  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [genre, setGenre] = useState('');
  let [city, setCity] = useState('');
  // let [className, setclassName] =useState('');
  let [searchItem, setSearchItem] = useState('');


  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('firstName local state', firstName);
  //   dispatch({
  //     type: 'START_SEARCH',
  //     payload: firstName,
  //   });
  // }


  function handleSubmit(event) {
    event.preventDefault();

    console.log('SearchItem local state', searchItem);
    console.log('event.target', event.target);
    console.log('event.target.VALUE', event.target.value);
    console.log('event.target.className', event.target.className);




    if (event.target.className === 'first_name') {
      console.log('Searching firstName:', firstName);
      dispatch({
        type: 'START_SEARCH',
        payload: {
          className: event.target.className,
          searchItem: firstName
        }
      });
    }
    else if (event.target.className === 'last_name') {
      console.log('Searching last_name:', lastName);
      dispatch({
        type: 'START_SEARCH',
        payload: {
          className: event.target.className,
          searchItem: lastName
        }
      });
    }
    else if (event.target.className === 'genre') {
      console.log('Searching genre:', genre);
      dispatch({
        type: 'START_SEARCH',
        payload: {
          className: event.target.className,
          searchItem: genre
        }
      });
    }
    else if (event.target.className === 'city') {
      console.log('Searching city:', city);
      dispatch({
        type: 'START_SEARCH',
        payload: {
          className: event.target.className,
          searchItem: city
        }
      });
    }

    // dispatch({
    //   type: 'START_SEARCH',
    //   payload: {
    //     className: event.target.className,
    //     searchItem: searchItem}
    // });

  }


  useEffect(() => {
    dispatch({ type: 'GET_ALL_COMEDIANS' });
  }, []);


  return (<>
    <div className="moveDown"></div>

    <Box className="mainBox">

      <Grid item className="title">
        <h2 item align="center" >Search Page</h2>
      </Grid>

      <center>  
          <Typography>Welcome, {user.name ? user.name : 'please Register or Login to view/edit your Favorites list :)' }</Typography>
      </center>
      <br></br>

      <Grid container className="MainSearchContainer"
        justifyContent="space-evenly"
        item align="center"
      >

        



        <Grid container className="searchForm"
          //  direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >

          <Grid item className="GridItems" >

            <form className="first_name" onSubmit={handleSubmit}>
              <Typography align="center" wrap="nowrap">Search First Name</Typography>
              <br></br>
              <Grid container >
              <TextField variant="outlined"
                // placeholder='First Name'   
                margin="auto"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)} />
              <Button variant="contained" type='submit' ><SearchIcon /></Button>
              </Grid>
            </form>

          </Grid>

          <Grid item className="GridItems">
            <form className="last_name" onSubmit={handleSubmit}>
              <Typography align="center" wrap="nowrap">Search Last Name</Typography>
              <br></br>
              <Grid container >
                <TextField variant="outlined"
                  // placeholder='Last Name'
                  margin="auto"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)} 
                  />
                <Button variant="contained" type='submit'><SearchIcon /></Button>
              </Grid>
            </form>
          </Grid>

          <Grid item className="GridItems" >
            <form className="genre" onSubmit={handleSubmit} >
              <Typography align="center" wrap="nowrap">Search Genre Name</Typography>
              <br></br>
            <Grid container>
              <TextField variant="outlined"
                // placeholder='Genre'
                margin="auto"
                value={genre}
                onChange={(event) => setGenre(event.target.value)} />
              <Button variant="contained" type='submit' ><SearchIcon /></Button>
                </Grid>
            </form>
          </Grid>

          <Grid item className="GridItems">
            <form className="city" onSubmit={handleSubmit}>
              <Typography align="center" wrap="nowrap">Search City</Typography>
              <br></br>
              <Grid container >
              <TextField variant="outlined"
                // placeholder='City'
                margin="auto"
                value={city}
                onChange={(event) => setCity(event.target.value)} />
              <Button variant="contained" type='submit'><SearchIcon /></Button>
              </Grid>
            </form>
          </Grid>


        </Grid>

        <br></br>


        <Grid container className="GridContainerMapper"
         direction="row"
        //  justifyContent="space-evenly"
         justifyContent="center"
         alignItems="flex-start"
         spacing={3}
         rowSpacing={4}
        >

          {search && search.map(comedian => {
            return (
              // <div key={comedian.id} onClick={() => clickIcon (comedian.id)}> 
              <Grid item key={comedian.id} >
                <ComedianItem comedianProp={comedian} />
              </Grid>
            );
          })}

        </Grid>
        <Box color="primary.dark">
          <Typography>

          </Typography>
        </Box>



      </Grid>

    </Box>
    <br></br>
  </>
  );
}

export default SearchPage;

{/* 
  // -- MAP ALL COMEDIANS -- //
  <div>
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
</div> */}
