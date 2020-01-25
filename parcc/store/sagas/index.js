import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getParkingPending } from './parking';

export function* watchParking(){
    yield takeEvery(actionTypes.GET_PARKING_PENDING, getParkingPending);
}