import { put, takeLatest } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function* updateUsername() {
    try{
        const response = yield axios.put(`/api/settings${action.payload}`)

        yield takeLatest('FETCH_USER', fetchUser);


    } catch (error) {
        console.log('ERROR in SETTINGS SAGA', error );
    }
}








function* settingsSaga(){
    yield takeLatest('UPDATE_USERNAME', updateUsername )
}


export default settingsSaga;