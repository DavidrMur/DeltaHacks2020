import * as actionTypes from './actionTypes';

export const getParkingPending = payload => {
    return {
        type: actionTypes.GET_PARKING_PENDING,
        payload: payload
    }
}