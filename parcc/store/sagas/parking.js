import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';


export function* getParkingPending(action){
    try {
        console.log('helloworld');
        console.log(action);
        const response = yield axios.get(`https://parccdh.communote.net/location/${action.payload}`);
        console.log("response");
        console.log(response.data.result);
        yield put(actions.setParkingOptions(response.data.result));
    } catch (error) {
        console.log(error);
    }
}
