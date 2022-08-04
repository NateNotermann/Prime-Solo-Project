

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

import './SearchPage.css'

// -- react imports -- //
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';



function SearchPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const listAllComedians = useSelector(store => store.allComediansSaga);
  const tempListAllComedians = [
  {id: 1, first_name: 'Liz', last_name: 'Miele', icon: 'images/comedians/liz_miele_icon.jpg'},
  {id: 2, first_name: 'Monica', last_name: 'Nevi', icon: 'images/comedians/monica_nevi_icon.jpg'}, 
  {id: 3, first_name: 'Tom', last_name: 'Segura', icon: 'images/comedians/tom_segura_icon.jpg'}];


 const clickIcon =(comedianProp) => {

  console.log('prop:', comedianProp);
  dispatch ({
    type: 'SAVE_CURRENT_COMEDIAN',
    payload: {comedianProp}
  })
  history.push(`/details/${comedianProp.first_name}${comedianProp.last_name}`)
 }


  // console.log('tempListAllComedians', tempListAllComedians);
tempListAllComedians
  useEffect(() => {
    dispatch({ type: 'GET_ALL_COMEDIANS' });
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
      <div>
        <h3>{listAllComedians}</h3>
        <section className="listAllComedians">
          {tempListAllComedians.map(comedian => {
            return (
              <div key={comedian.id} >
                <h3>{comedian.first_name}</h3>
                <h3>{comedian.last_name}</h3>
                <img className='icon'
                  src={comedian.icon}
                  alt={comedian.first_name}
                onClick={(event) => clickIcon (comedian)} // sends (movie) to 'clickPoster' function
                />
                <h4>{comedian.id}</h4>
              </div>
            );
          })}

        </section>
      
      </div>



          <ComedianDetails comedian={comedianProp}/>
    </div>
  );
}


export default SearchPage;

