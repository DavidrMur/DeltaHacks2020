import * as actionTypes from '../actions/actionTypes';

const initialState = {
    location: '',
    parkingOptions: [],
    address: '',
};

const setAddress = (state, action) => {
    const tempAddress = action.payload;
    tempAddress.replace(/ /g,'-');
    console.log("tempaddress");
    console.log(tempAddress);
    return {...state, address: action.payload}
}

const setParkingOptions = (state, action) => {
    return {...state, parkingOptions: action.payload}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PARKING_OPTIONS:
            return setParkingOptions(state, action);
        case actionTypes.SET_ADDRESS:
            return setAddress(state, action);
        default:
            return state;    
    }
}

export default reducer;