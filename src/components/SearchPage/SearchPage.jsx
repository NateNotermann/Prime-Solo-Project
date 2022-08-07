

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
  // -- hard coded data to keep moving forward while working on bug -- //
  // const tempListAllComedians = [ 
  // {id: 1, first_name: 'Liz', last_name: 'Miele', icon: 'images/comedians/liz_miele_icon.jpg'},
  // {id: 2, first_name: 'Monica', last_name: 'Nevi', icon: 'images/comedians/monica_nevi_icon.jpg'}, 
  // {id: 3, first_name: 'Tom', last_name: 'Segura', icon: 'images/comedians/tom_segura_icon.jpg'}];




  useEffect(() => {
    dispatch({ type: 'GET_ALL_COMEDIANS' });
  }, []);


  return (
    <div className="container">
      <p>Search Page</p>

    

      <div className="inputs">
        <div>
        <input placeholder='First Name'></input>
        <button>Search First Name</button>
        </div>
        <div>
        <input placeholder='Last Name'></input>
        <button>Search Last Name</button>
        </div>
        <div>
        <input placeholder='Genre Name'></input>
        <button>Search Genre Name</button>
        </div>
         <div>
        <input placeholder='City Name'></input>
        <button>Search City</button>
        </div>
      </div>
      
  {/* <ComedianItem title='hello world' comedian={listAllComedians}/> */}
      {/* <button>Search Comedians </button> */}
    <br></br>
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
      </div>



      
    </div>
  );
}


export default SearchPage;

