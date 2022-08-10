import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions
function* search(action) {
  console.log('action', action);
  console.log('action.payload', action.payload);
  
  try {
    const response = yield axios.get(`/api/search/${action.payload.className}/${action.payload.searchItem}`);
    yield put({ type: 'SAVE_SEARCH', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}



function* searchSaga() {
  yield takeLatest('START_SEARCH', search);
}

export default searchSaga;
