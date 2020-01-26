import * as actionTypes from './actionTypes';

export const getParkingPending = payload => {
    return {
        type: actionTypes.GET_PARKING_PENDING,
        payload: payload
    }
}

export const setParkingOptions = payload => {
    return {
        type: actionTypes.SET_PARKING_OPTIONS,
        payload: payload
    }
}

export const setAddress = payload => {
    return {
        type: actionTypes.SET_ADDRESS,
        payload: payload
    }
}