
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


function ListAllComedians (props) {

    const dispatch = useDispatch();
    const listAllComedians = useSelector(store => store.allComediansSaga);
    console.log('list all ', listAllComedians);
    
    useEffect(() => {
        // dispatch({ type: 'GET_ALL_COMEDIANS' })
      }, []);
    
    return (<>
    
    {/* <h2> in ListAllComedians</h2>
      <section className="listAllComedians">
          {listAllComedians.map(comedian => {
            return (
              <>
              <div key={comedian.id} >
                <h3>{comedian.first_name}</h3>
              <ListAllComedians />
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
    </>)
}


export default ListAllComedians;