
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// ----- GET ALL FAVORITES ----- //
function* getFavoritesSaga(action) {
    try {
        // const Favorites = yield axios.get(`/api/Favorites/${action.payload}`);
        
        const Favorites = yield axios.get(`/api/Favorites/${action.payload}`);
        yield put ({ type: 'FAVORITES_REDUCER', payload: Favorites.data }) // TELL
    } catch {
        console.log('ERROR - FAVORITES SAGA');
    }

}

// ----- ADD FAVORITE ---- //
function* addFavorite(action) { //action.payload is: { user_id: #, comedian_id: # }
    try {
        // console.log('action.payload', action.payload);
        const favorite = yield axios.post(`/api/Favorites`, action.payload); 
        // console.log('AXIOS ADD action.payload', action.payload);
        yield put ({ type: 'GET_FAVORITES', })
    } catch {
        console.log('ERROR - FAVORITE SAGA');
    }
}



// ----- DELETE FAVORITE ---- //
function* deleteFavorite(action) { //action.payload - should be just an INT.
    try {
        console.log('AXIOS DELETE action.payload:', action.payload); // should be just an INT.
        yield axios.delete(`/api/Favorites/${action.payload}`); // example: `/api/Favorites/62`
        yield put ({ type: 'FETCH_USER', })
        yield put ({ type: 'GET_FAVORITES' })
    } catch {
        console.log('ERROR - FAVORITE SAGA');
    }
}








function* FavoritesSaga() {
    yield takeEvery('GET_FAVORITES', getFavoritesSaga) // HEAR, then run 'getFavoritesSaga2'
    yield takeEvery('ADD_FAVORITE', addFavorite) // HEAR, then run 'favorite'
    yield takeEvery('DELETE_FAVORITE', deleteFavorite) // HEAR, then run 'unfavorite'

}


export default FavoritesSaga;