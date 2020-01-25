import { put } from 'redux-saga/effects';
import * as actions from '../actions';


export function* getParkingPending(action){
    try {
        console.log(action);
        console.log ('Saga response');
    } catch (error) {
        console.log("heck");
    }
}
