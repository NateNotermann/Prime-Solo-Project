import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory} from 'react-router-dom';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Favorites(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store.Favorites);
  const [heading, setHeading] = useState('Functional Component');
  const dispatch = useDispatch();




  useEffect(() => {
    // dispatch({ type: 'GET_FAVORITES' });

  }, []);


  return (
    <div>
      {/* <h2>{heading}</h2> */}
      <h2>Favorites Page</h2>

    </div>
  );
}

export default Favorites;
