import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

// -- Component to display just one comedians info -- //
function ComedianDetails() {

const dispatch = useDispatch();
const currentComedian = useSelector(store => store.CurrentComediansReducerStore);
const cCDestructured = currentComedian.comedianProp;
// const currentComedian = useSelector(store => store.allComediansReducerStore);
const [heading, setHeading] = useState('Functional Component');



useEffect(() => {
    // dispatch({ type: 'SAVE_CURRENT_COMEDIAN' });
    // dispatch({ type: 'GET_ALL_COMEDIANS' });
  }, []);


    console.log('currentComedian:', currentComedian);
    console.log('currentComedian.comedianProp:', currentComedian.comedianProp);
    console.log('cCDestructured:', cCDestructured);
    return(
        <div className="container">
        <h2>PRINT ME ON DOM IF IN Comedian Details</h2>
        <img className='icon'
            src={cCDestructured.icon}
            alt={cCDestructured.first_name}/>
        <h3>Comedian is: {currentComedian.comedianProp.first_name}{cCDestructured.last_name}</h3>
        <h3>Comedian is: {cCDestructured.genre}</h3>
        <h3>Comedian is: {cCDestructured.instagram_link}</h3>
        <h3>Comedian is: {cCDestructured.twitter_link}</h3>
        <h3>Comedian is: {cCDestructured.website_link}</h3>
        <h3>Comedian is: {cCDestructured.youtube_link}</h3>
       
     
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
