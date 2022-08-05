
import './ComedianDetails.css'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

// -- Component to display just one comedians info -- //
function ComedianDetails() {

  const dispatch = useDispatch();
  const currentComedian = useSelector(store => store.CurrentComediansReducerStore);
  const CCD = currentComedian.comedianProp;  

  
  // -- "CCD" is a DECONSTRUCTED version of currentComedian
  // const currentComedian = useSelector(store => store.allComediansReducerStore);
  const [heading, setHeading] = useState('Functional Component');



  useEffect(() => {
    dispatch({ type: 'GET_CURRENT_COMEDIAN' });
    // dispatch({ type: 'GET_ALL_COMEDIANS' });
  }, []);


  console.log('currentComedian:', currentComedian);
  console.log('currentComedian.comedianProp:', currentComedian.comedianProp);
  console.log('CCD:', CCD);
  return (
    <div className="cdcontainer">
      {/* <h2>Comedian Details</h2> */}
      
      {/* <h2>{currentComedian.comedianProp.first_name} {CCD.last_name}</h2>
      <img className='icon'
        src={CCD.icon}
        alt={CCD.first_name} />
        <br></br>
       <a href={CCD.instagram_link} title="Instagram" target="_blank">Instagram</a>.
      <a href={CCD.twitter_link} title="Twitter" target="_blank">Twitter</a>.
      <a href={CCD.website_link} title="Website" target="_blank">Website</a>.
      <a href={CCD.youtube_link} title="Youtube" target="_blank">Youtube</a>.
      <h3>Genre: {CCD.genre}</h3>
      <p>{CCD.description} </p> */}
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
