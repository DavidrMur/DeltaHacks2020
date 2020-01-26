
import React, {Component} from 'react'
import {View, Text, StyleSheet, ImageBackground, ActivityIndicator,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import Location from '../components/location/location'
import axios from 'axios'
import {AppLoading} from 'expo';

class parkingSpotsScreen extends Component{
    state={
        temperature:null,
        weather:null,
        loading:true,
        output:[{'Title': 'Westoby (Olympic) Arena', 'Address': '70 Olympic Dr, Dundas, ON L9H 7P5, Canada', 'Latitude': 43.27287723029571, 'Longitude': -79.93426208848754, 'Distance': 1.6379435388952792}, {'Title': 'Westdale Library', 'Address': '955 King St W, Hamilton, ON L8S 1K9, Canada', 'Latitude': 43.26256862152026, 'Longitude': -79.903476765601, 'Distance': 1.3652771828922607}, {'Title': 'Hamilton Military Museum', 'Address': '610 York Blvd, Hamilton, ON L8R 3H1, Canada', 'Latitude': 43.2681814437121, 'Longitude': -79.88471105109906, 'Distance': 2.9626710559728493}, {'Title': 'David Braley Athletic Centre', 'Address': 'David Braley Athletic Centre, 1280 E Main St, Hamilton, ON L8S 4E8, Canada', 'Latitude': 43.26504364332839, 'Longitude': -79.91616538953649, 'Distance': 0.456774159586171}]
    }
    componentDidMount() {
        axios.get(`https://api.darksky.net/forecast/8b486e7acbd606454f4a0f8f95b56886/43.263444914224245,-79.91824930126315`)
          .then(res => {
            this.setState({weather:res.data.currently.summary})
            let celsius = (5/9) * (res.data.currently.temperature- 32)
            celsius=Math.round(celsius*100)/100
            this.setState({temperature:celsius})
          })
      }
    rounder=()=>{
        this.state.output.forEach(element => {
            element.Distance=Math.round(element.Distance*100)/100
        });
        }
    render() {
        this.rounder()

        locations=         
        this.state.output.map(loc=>(
            <Location
            title={loc.Title}
            address={loc.Address}
            distance={loc.Distance}/>
        ))

        return(
            <ImageBackground source={require('../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.screen}>
                    <Text style={styles.heading}>Here are your potential spots from: {this.props.address} with {this.state.weather} weather at {this.state.temperature} degrees celsius</Text>
                    <ScrollView style={{alignSelf:"stretch",}}>
                        {locations}
                    </ScrollView>
                    
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
        fontSize: 28,
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