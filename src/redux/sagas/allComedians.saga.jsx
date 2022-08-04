import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// generator saga waiting for the saga at the bottom to call upon it //
function* getAllComedians() {  // --- do-er -- 
    // GET all comedians from the database //
    try {
        const comedians = yield axios.get('/api/comedians');
        yield put ({ type: 'SAVE_ALL_COMEDIANS', payload: comedians.data})
        console.log('getallComedians SAGA from db via comedians const (allComedians.saga.JSX)', comedians.data);
    } catch {
        console.log( 'SAVE_ALL_COMEDIANS ERROR (allComedians.saga.JSX)');
    }
}






// generator listens for thw useEffect in SearchPage to dispatch 'GET_ALL_COMEDIANS'
// generator listening ready to run the above saga when called upon //

function* allComediansSaga() { // --listener --
    yield takeLatest('GET_ALL_COMEDIANS', getAllComedians);
  }

// export just the last generator 'allComedians' into the rootSaga to be used when ever
export default allComediansSaga;

// function* getAllComedians() {
//     // GET all comedians from the database //
//     try {
//         const comedians = yield axios.get('/api/comedians');
//         yield put ({ type: 'SAVE_ALL_COMEDIANS', payload: comedians.data})
//         console.log('getallComedians SAGA from db via comedians const (allComedians.saga.JSX)', comedians.data);
//     } catch {
//         console.log( 'SAVE_ALL_COMEDIANS ERROR (allComedians.saga.JSX)');
//     }
// }