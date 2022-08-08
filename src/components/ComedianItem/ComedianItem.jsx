
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, } from 'react-router-dom';

// --- item to render a single comedian's 
// id, first name, last name, icon and a favorite or unfavorite button.
// will be used any time we are .map()ing 

function ComedianItem({ comedianProp }) {
    const user_id = useSelector(store => store.user.id);
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
        history.push(`/ComedianDetails/${comedianProp.first_name}-${comedianProp.last_name}-${comedianId}`)
        // must match route with 'exact path="/ComedianDetails"' in App.jsx - 
    }

   
    

    // ------ FAVORITE BUTTONS ------ // 
    
    // function to add a favorite 
    const addFavorite = (comedian_id) => {

        console.log('Add Favorite:', comedian_id, 'user.id:', user_id);
        // console.log('id!', id);
        dispatch({
          type:   'ADD_FAVORITE',
          payload: {
                  user_id,    // shows as user_id: #
                  comedian_id // shows as comedian_id: #
          } 
        })
      };
      

  // function to remove a favorite 
  const deleteFavorite = (id) => {
    console.log('Delete Favorite comedian', comedianProp.id);
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: id
    })
  };



    // console.log('comedianProp', comedianProp);
    return (
        <div>
            <div onClick={() => clickIcon(comedianProp.id)}>
                {/* <h3> comedian item </h3> */}
                <h2>{comedianProp.first_name} {comedianProp.last_name}</h2>
                <img className='icon'
                    src={comedianProp.icon}
                    alt={comedianProp.first_name} />
            </div>
            <button onClick={() => addFavorite(comedianProp.id)}>addFavorite</button>
            <button onClick={() => deleteFavorite(comedianProp.id)}>deleteFavorite</button>
        </div>
    )
}


export default ComedianItem;