import { put } from 'redux-saga/effects';
import * as actions from '../actions';


export function* getParkingPending(action){
    try {
        parkingOptions = [{'Address': '23 Hatt St.', 'lat': 43.2656383, 'lng': -79.9570069, 'Distance': 3.005148165230547}, {'Address': '82 King St. W.', 'lat': 43.2663769, 'lng': -79.9573175, 'Distance': 3.0414508493143426}, {'Address': '22 Bay St. S.', 'lat': 43.2574872, 'lng': -79.87398879999999, 'Distance': 3.796150773076337}]
        yield put(actions.setParkingOptions(parkingOptions));
    } catch (error) {
        console.log(error);
    }
}
