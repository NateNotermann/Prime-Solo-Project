

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
import { Box, Button, Grid, Paper, TextField, Typography, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// useParams may not be necessary might be like a stretch goal getting from the router file


function SearchPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const listAllComedians = useSelector(store => store.allComediansReducerStore);

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
              {/* <br></br> */}
              <TextField variant="outlined"
                placeholder='First Name'
                margin="auto"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)} />
              <Button variant="outlined" type='submit' ><SearchIcon /></Button>
            </form>

          </Grid>

          <Grid item className="GridItems">
            <form className="last_name" onSubmit={handleSubmit}>
              <Typography align="center" wrap="nowrap">Search Last Name</Typography>
              {/* <br></br> */}
              <Grid container >
                <TextField variant="outlined"
                  // placeholder='Last Name'
                  margin="auto"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)} />
                <Button variant="outlined" type='submit'><SearchIcon /></Button>
              </Grid>
            </form>
          </Grid>

          <Grid item className="GridItems" >
            <form className="genre" onSubmit={handleSubmit} >

              <Typography align="center" wrap="nowrap">Search Genre Name</Typography>
              {/* <br></br> */}
              <TextField variant="outlined"
                placeholder='Genre'
                margin="auto"
                value={genre}
                onChange={(event) => setGenre(event.target.value)} />
              <Button variant="outlined" type='submit' ><SearchIcon /></Button>
            </form>
          </Grid>

          <Grid item className="GridItems">
            <form className="city" onSubmit={handleSubmit}>
              <Typography align="center" wrap="nowrap">Search City</Typography>
              {/* <br></br> */}
              <TextField variant="outlined"
                placeholder='City'
                margin="auto"
                value={city}
                onChange={(event) => setCity(event.target.value)} />
              <Button variant="outlined" type='submit'><SearchIcon /></Button>

            </form>
          </Grid>


        </Grid>

        <br></br>


        <Grid container className="GridContainerMapper" >

          {search && search.map(comedian => {
            return (
              // <div key={comedian.id} onClick={() => clickIcon (comedian.id)}> 
              <Grid item key={comedian.id}>
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
