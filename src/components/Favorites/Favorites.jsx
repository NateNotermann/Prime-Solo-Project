import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import ComedianItem from '../ComedianItem/ComedianItem.jsx';


function Favorites(props) {

  

  const user = useSelector(store => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const Favorites = useSelector((store) => store.Favorites);
  // console.log('Favorites const:', Favorites);


  console.log('history', history);

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
            <ComedianItem comedianProp={comedian}  />
          </div>

        )
      })}
      </section>

    </div>
  );
}

export default Favorites;
