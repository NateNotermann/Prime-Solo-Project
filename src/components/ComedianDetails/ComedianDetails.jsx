
import './ComedianDetails.css'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

// -- Component to display just one comedians info -- //
function ComedianDetails() {

  const dispatch = useDispatch();
  const currentComedian = useSelector(store => store.CurrentComediansReducerStore);
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
    <div className="cdcontainer">
      <h2>Comedian Details</h2>
      
      <h2>{currentComedian.first_name} {currentComedian.last_name} id: {currentComedian.id}</h2>
      <img className='icon'
        src={currentComedian.icon}
        alt={currentComedian.first_name} />
        <br></br>
        <button onClick={() => Favorite (currentComedian.id)}>Favorite</button>
        <button onClick={() => UnFavorite (currentComedian.id)}>UnFavorite</button>
        <br></br>
       <a href={currentComedian.instagram_link} title="Instagram" target="_blank">Instagram</a>.
      <a href={currentComedian.twitter_link} title="Twitter" target="_blank">Twitter</a>.
      <a href={currentComedian.website_link} title="Website" target="_blank">Website</a>.
      <a href={currentComedian.youtube_link} title="Youtube" target="_blank">Youtube</a>.
      <h5>Genre: {currentComedian.genre}</h5>
      <p>{currentComedian.description} </p>
    </div>
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
