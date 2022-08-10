
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, } from 'react-router-dom';

// --- item to render a single comedian's 
// id, first name, last name, icon and a favorite or unfavorite button.
// will be used any time we are .map()ing 

function ComedianItem({ favoriteProp }) {
    const user = useSelector(store => store.user.id);
    const history = useHistory();
    const dispatch = useDispatch();

    const clickIcon = (comedianId) => {
        dispatch({
            // this is TELLING
            type: 'GET_CURRENT_COMEDIAN', // DON`T CHANGE - 
            //Goes to -> CurrentComediansReducer
            payload: comedianId,
        })
        // history.push(`/ComedianDetails/${comedianId.first_name}${comedianId.last_name}`)
        history.push(`/ComedianDetails/${favoriteProp.first_name}-${favoriteProp.last_name}-${comedianId}`)
        // must match route with 'exact path="/ComedianDetails"' in App.jsx - 
    }

   

    // ------ REMOVE FAVORITE ------ // 
  const deleteFavorite = (favoriteId) => {
    console.log('Delete Favorite:', favoriteId, 'user:', user);
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: favoriteId,  // favoriteId is just and INT, it is pulled from favorites.id
    })
  };



    console.log('favoriteProp', favoriteProp);
    console.log('favoriteProp.id', favoriteProp.id);
    return (
        <div key={favoriteProp.id}>
            <div onClick={() => clickIcon(favoriteProp.id)}>
                {/* <h3> comedian item </h3> */}
                <h2>{favoriteProp.first_name} {favoriteProp.last_name}, id is: {favoriteProp.id}</h2>
                <img className='icon'
                    src={favoriteProp.icon}
                    alt={favoriteProp.first_name} />
            </div>
            {/* <button onClick={() => addFavorite(favoriteProp.id)}>addFavorite</button> */}
            <button onClick={() => deleteFavorite(favoriteProp.id)}>Delete Favorite</button>
        </div>
    )
}


export default ComedianItem;