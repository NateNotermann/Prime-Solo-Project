

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
    dispatch({
      type: 'START_SEARCH',
      payload: {
        className: event.target.className,
        searchItem: searchItem}
    });
  }


  useEffect(() => {
    dispatch({ type: 'GET_ALL_COMEDIANS' });
  }, []);


  return (
    <div className="container">
      <h2>Search Page</h2>
      <br></br>
    

      <div className="searchForm">


  <form className="first_name" onSubmit={handleSubmit}>
    <label>Search First Name</label>
    <br></br>
        <input
        placeholder='First Name'
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}/> 
        <button type='submit'>Submit</button>
    </form>

    <form className="last_name" onSubmit={handleSubmit}>
    <label>Search Last Name</label>
    <br></br>
        <input
        placeholder='Last Name'
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}/> 
        <button type='submit'>Submit</button>
    </form>

    <form className="genre" onSubmit={handleSubmit}>
    <label>Search Genre</label>
    <br></br>
        <input
        placeholder='Genre'
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}/> 
        <button type='submit'>Submit</button>
    </form>

    <form className="city" onSubmit={handleSubmit}>
    <label>Search City</label>
    <br></br>
        <input
        placeholder='City'
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}/> 
        <button type='submit'>Submit</button>
    </form>
      </div>
  
  <br></br>
  <section className="listAllComedians">
    {search && search.map(comedian => {
      return (
        // <div key={comedian.id} onClick={() => clickIcon (comedian.id)}> 
        <div key={comedian.id}> 
        <ComedianItem comedianProp={comedian}/>
        </div>
      );
    })}
  </section>
      
    </div>
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
