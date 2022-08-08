import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import FavoriteItem from '../FavoriteItem/FavoriteItem';


function Favorites(props) {

  

  const user = useSelector(store => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const Favorites = useSelector((store) => store.Favorites);



  useEffect(() => {
    dispatch({ type: 'GET_FAVORITES' }); // TELL

  }, []);

console.log('favorites', Favorites);
  return (
    <div>
      <h2>{user.username}'s Favorites Page</h2>
      <br></br>
      <section className="favoritesList">{Favorites.map(favorite => {
        return (
          <div className="comedian">
            <FavoriteItem favoriteProp={favorite}  />
          </div>

        )
      })}
      </section>

    </div>
  );
}

export default Favorites;
