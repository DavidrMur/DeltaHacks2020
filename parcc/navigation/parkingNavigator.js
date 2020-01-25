import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ParkingSpotsScreen from '../screens/parkingSpotsScreen'
import mainScreen from '../containers/mainPage/mainPage'
const parkingNavigator =createStackNavigator({
    landing: mainScreen,
    parkingSpots:ParkingSpotsScreen

})

export default createAppContainer(parkingNavigator);