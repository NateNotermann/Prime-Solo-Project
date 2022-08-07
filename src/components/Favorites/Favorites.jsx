import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import ComedianItem from '../ComedianItem/ComedianItem.jsx';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Favorites(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  const user = useSelector(store => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const Favorites = useSelector((store) => store.Favorites);
  // console.log('Favorites const:', Favorites);

  const comedianDetails =(id) => {
    console.log('ICON CLICKED id!', id);
    dispatch ({
      type: 'GET_CURRENT_COMEDIAN', 
      payload: id
    })
    history.push(`/ComedianDetails/${id}`)
  }

// function to add a favorite 
  const Favorite = (id) => {
    console.log('Favorited id!', id);
    dispatch ({
      type: 'FAVORITE',
      payload: id
    })
  };

  // function to remove a favorite 
  const UnFavorite = (id) => {
    console.log('UnFavorited id', id);
    dispatch ({
      type: 'UNFAVORITE',
      payload: id
    })
  };


  useEffect(() => {
    dispatch({ type: 'GET_FAVORITES' }); // TELL

  }, []);
  

  return (
    <div>
      <h2>{user.username}'s Favorites Page</h2>
      <br></br>
      <section className="favoritesList">{Favorites.map(comedian => {
        return (
          <div className="comedian">
               <ComedianItem comedianProp={comedian}/>
          </div>
            
        )
      })}
      </section>

    </div>
  );
}

export default Favorites;
