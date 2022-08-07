
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getFavoritesSaga2(action) {

    try {
        // const Favorites = yield axios.get(`/api/Favorites/${action.payload}`);
        const Favorites = yield axios.get(`/api/Favorites`);
        yield put ({ type: 'FAVORITES_REDUCER', payload: Favorites.data }) // TELL
    } catch {
        console.log('ERROR - FAVORITES SAGA');
    }

}









function* getFavoritesSaga1() {
    yield takeEvery('GET_FAVORITES', getFavoritesSaga2) // HEAR, then run 'getFavoritesSaga2'
}


export default getFavoritesSaga1;