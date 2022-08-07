
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// ----- GET ALL FAVORITES ----- //
function* getFavoritesSaga(action) {
    try {
        // const Favorites = yield axios.get(`/api/Favorites/${action.payload}`);
        const Favorites = yield axios.get(`/api/Favorites`);
        yield put ({ type: 'FAVORITES_REDUCER', payload: Favorites.data }) // TELL
    } catch {
        console.log('ERROR - FAVORITES SAGA');
    }

}

function* favorite(action) {
    try {
        const favorite = yield axios.post(`/api/Favorites`);
        yield put ({ type: 'GET_FAVORITES', })
    } catch {
        console.log('ERROR - FAVORITE SAGA');
    }
}

function* unfavorite(action) {
    try {
        const unfavorite = yield axios.get(`/api/Favorites`);
        yield put ({ type: 'FAVORITES_REDUCER', payload: Favorites.data })
    } catch {
        console.log('ERROR - FAVORITE SAGA');
    }
}








function* FavoritesSaga() {
    yield takeEvery('GET_FAVORITES', getFavoritesSaga) // HEAR, then run 'getFavoritesSaga2'
    yield takeEvery('FAVORITE', favorite) // HEAR, then run 'favorite'
    // yield takeEvery('UNFAVORITE', unfavorite) // HEAR, then run 'unfavorite'

}


export default FavoritesSaga;