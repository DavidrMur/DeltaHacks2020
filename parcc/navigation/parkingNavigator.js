import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ParkingSpotsScreen from '../screens/parkingSpotsScreen'
import mainScreen from '../containers/mainPage/mainPage'
const parkingNavigator =createStackNavigator({
    ParccLanding: mainScreen,
    Spots:ParkingSpotsScreen

})

export default createAppContainer(parkingNavigator);