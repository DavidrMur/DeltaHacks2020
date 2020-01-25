import { put } from 'redux-saga/effects';
import * as actions from '../actions';


export function* getParkingPending(action){
    try {
        console.log(parkingOptions);
        parkingOptions = [
            {
                parkLocation: '26 Haddon Avenue North',
                walkDistance: '750', // make sure units are right
                cost: '2.50',
                googleLink: 'google.ca',
            },
            {   
                parkLocation: '7 Delbrook',
                walkDistance: '2000', // make sure units are right
                cost: '0',
                googleLink: 'google.ca',
            }
        ];
        yield put(actions.setParkingOptions(parkingOptions));
    } catch (error) {
        console.log(error);
    }
}
