
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// SAGAS ARE CLIENT SIDE
// generator saga waiting for the saga at the bottom to call upon it //
function* getCurrentComedian(action) { // action is the comedianId from the search Page
    // GET all comedians from the database //
    // console.log('action', action);
    // console.log('action.payload', action.payload);
    try {
        // const comedian = yield axios.get(`/api/comedianDetails/${action.payload}`);
        const comedian = yield axios.get(`/api/comedianDetails/${action.payload}`);
        yield put ({ type: 'SAVE_CURRENT_COMEDIAN', payload: comedian.data})
        console.log('getCurrentComedian saga', comedian.data);
        console.log('getCurrentComedian action.payload', action.payload);
    } catch {
        console.log( 'SAVE_ALL_COMEDIANS ERROR (allComedians.saga.JSX)');
    }
}


// EVENTUAlLY ADD THIS TO ROUTER
//   const id = req.params.id;
// EVENTUAlLY ADD THIS TO ROUTER



// generator listens for thw useEffect in SearchPage to dispatch 'GET_ALL_COMEDIANS'
// generator listening ready to run the above saga when called upon //
function* currentComedianSaga() {
    // yield takeLatest('SAVE_CURRENT_COMEDIAN', getAllComedians);
    yield takeLatest('GET_CURRENT_COMEDIAN', getCurrentComedian);
  }

// export just the last generator 'allComedians' into the rootSaga to be used when ever
export default currentComedianSaga;