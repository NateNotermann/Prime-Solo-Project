import React, { useState } from 'react';
import {useSelector} from 'react-redux';
  

const store = useSelector((store) => store.ComedianDetails);
const [heading, setHeading] = useState('Functional Component');





// -- Component to display just one comedians info -- //
function ComedianDetails(comedian) {
    console.log('comedian:', comedian);
    return(
        <div>
        <h3>Comedian is: {comedian}</h3>
        
    
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
