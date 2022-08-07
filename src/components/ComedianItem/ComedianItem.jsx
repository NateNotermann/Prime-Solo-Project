
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, } from 'react-router-dom';

// --- item to render a single comedian's 
// id, first name, last name, icon and a favorite or unfavorite button.
// will be used any time we are .map()ing 

function ComedianItem({ comedianProp }) {
    // const user = useSelector(store => store.user);
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
    const Favorite = (id) => {
        console.log('Favorited comedian!', comedianProp.id);
        dispatch({
          type: 'FAVORITE',
          payload: id
        })
      };
      

  // function to remove a favorite 
  const UnFavorite = (id) => {
    console.log('UnFavorited comedian', comedianProp.id);
    dispatch({
      type: 'UNFAVORITE',
      payload: id
    })
  };



    console.log('comedianProp', comedianProp);
    return (
        <div>
            <div onClick={() => clickIcon(comedianProp.id)}>
                {/* <h3> comedian item </h3> */}
                <h2>{comedianProp.first_name} {comedianProp.last_name}</h2>
                <img className='icon'
                    src={comedianProp.icon}
                    alt={comedianProp.first_name} />
            </div>
            <button onClick={() => Favorite(comedianProp.id)}>Favorite</button>
            <button onClick={() => UnFavorite(comedianProp.id)}>UnFavorite</button>
        </div>
    )
}


export default ComedianItem;