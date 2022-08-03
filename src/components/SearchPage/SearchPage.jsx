

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

// -- react imports -- //
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'




function SearchPage() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch({type: 'GET_ALL_COMEDIANS'});
}, []);



  return (
    <div className="container">
      <p>Search Page</p>
      


      <div className="inputs">
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        <input placeholder='Genre Name'></input>
        <input placeholder='City Name'></input>

      </div>
        <button>Search Comedians</button>
        




    </div>
  );
}


export default SearchPage;

