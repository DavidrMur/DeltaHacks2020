
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
        loading:true        
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
        this.props.parkingOptions.forEach(element => {
            element.Distance=Math.round(element.Distance*100)/100
        });
        }
    render() {
        //let locations = (<ActivityIndicator size="large" style={styles.container}></ActivityIndicator>);

        let locations = null;
        if (this.props.parkingOptions[0] !== null) {
            this.rounder()
            locations= (         
            this.props.parkingOptions.map(loc=>(
                <Location
                title={loc.Title}
                address={loc.Address}
                distance={loc.Distance}/>
            )))
        }

        return(
            <ImageBackground source={require('../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.screen}>
                    <Text style={styles.heading}>Here are your potential spots from: {this.props.address} with {this.state.weather} weather at {this.state.temperature} degrees celsius {this.state.camOut}</Text>
                    <ScrollView style={{alignSelf:"stretch",}}>
                        {this.props.parkingOptions[0] ? locations :<ActivityIndicator size="large" style={styles.container}></ActivityIndicator>}
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
    },container: {
        flexDirection:"column",
        marginTop:200,
        paddingLeft:2,
        alignContent:"center",
        justifyContent:"flex-end",
    }
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