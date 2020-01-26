
import React, {Component} from 'react'
import {View, Text, StyleSheet, ImageBackground, Linking,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import Location from '../components/location/location'
import {AppLoading} from 'expo';

class parkingSpotsScreen extends Component{
    state={
        output:[{'Address': '23 Hatt St.', 'lat': 43.2656383, 'lng': -79.9570069, 'Distance': 3.005148165230547}, {'Address': '82 King St. W.', 'lat': 43.2663769, 'lng': -79.9573175, 'Distance': 3.0414508493143426}, {'Address': '22 Bay St. S.', 'lat': 43.2574872, 'lng': -79.87398879999999, 'Distance': 3.796150773076337}]
    }
    render() {
        locations=         
        this.state.output.map(loc=>(
            <Location
            address={loc.Address}
            distance={loc.Distance}/>
        ))
        return(
    <ImageBackground source={require('../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.screen}>
            <Text style={styles.heading}>Here are your potential spots from: {this.props.address}</Text>
            <ScrollView style={{alignSelf:"stretch",}}>
                {locations}
            </ScrollView>
            {console.log(this.props.parkingOptions)}
        </View>
    </ImageBackground>
    );
        }

}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:10,
        alignItems:'center'
    },
    heading: {
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 30,
    },
});

const mapStateToProps = state => {
    return {
        address: state.parking.address,
        parkingOptions: state.parking.parkingOptions
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getParkingPending: (location) => dispatch(actions.getParkingPending(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(parkingSpotsScreen);