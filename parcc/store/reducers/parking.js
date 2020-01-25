import * as actionTypes from '../actions/actionTypes';

const initialState = {
    location: '',
    parkingOptions: [],
};


const setParkingOptions = (state, action) => {
    console.log(action);
    return {...state, parkingOptions: action.payload}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PARKING_OPTIONS:
            return setParkingOptions(state, action);
        default:
            return state;    
    }
}

export default reducer;