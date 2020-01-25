import * as actionTypes from '../actions/actionTypes';

const initialState = {state: 'empty'};

const getParkingPending = (state, action) => {
    //Take the content of the file and return back an array for availabilities
    
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PARKING_PENDING:
            return getParkingPending(state, action);
        default:
            return state;    
    }
}

export default reducer;