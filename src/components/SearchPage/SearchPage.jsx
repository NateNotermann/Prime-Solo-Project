

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

// -- react imports -- //
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import loading from 'range-parser'   // tells if data is loading
import ListAllComedians from '../ListAllComedians/ListAllComedians'

function SearchPage() {
  const dispatch = useDispatch();
  const listAllComedians = useSelector(store => store.allComediansSaga);
  console.log('listAllComedians test:', listAllComedians );
  
  function getAll(){
    return (
      dispatch({ type: 'GET_ALL_COMEDIANS' })
    )
  };

  useEffect(() => {
    dispatch({ type: 'GET_ALL_COMEDIANS' })
  }, [dispatch]);

// if (loading) {
//   return <p>data is loading</p>// tells if data is loading
// }

  return (<>
    {/* <ListAllComedians props={listAllComedians}/> */}
    <div className="container">
      <p>Search Page</p>


      <button onClick={(event) =>getAll() }> get all</button>
      <div className="inputs">
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        <input placeholder='Genre Name'></input>
        <input placeholder='City Name'></input>

      </div>
      <button>Search Comedians</button>
      <div>
        {/* <section className="listAllComedians">
          {listAllComedians.map(comedian => {
            return (
              <>
              <div key={comedian.id} >
                <h3>{comedian.first_name}</h3>
            
                <h3>{comedian.last_name}</h3>
                <img
                  src={comedian.icon}
                  alt={comedian.first_name}
                // onClick={(event) => clickPoster (movie)} // sends (movie) to 'clickPoster' function
                />
                <h4>{comedian.id}</h4>
              </div>
            </>);
          })}
        </section> */}
      </div>




    </div>
    </>
  );
}


export default SearchPage;

