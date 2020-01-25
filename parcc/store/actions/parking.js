import * as actionTypes from './actionTypes';

export const getParkingPending = payload => {
    console.log('hello');
    return {
        type: actionTypes.GET_PARKING_PENDING,
        payload: payload
    }
}