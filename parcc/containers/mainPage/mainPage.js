import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {AppLoading} from 'expo';
import { webWeights } from 'react-native-typography' 

class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false,
      address:"",
      invalid:true
    }
 }


    advanceFunction=()=>{
        this.props.setParkingOptions([]);
        this.props.setAddress(this.state.address)
        this.props.getParkingPending(this.state.address)

        this.props.navigation.navigate("Spots")
    }
    changeHandler=(event)=>{
        this.setState({address:event.nativeEvent.text},()=>{
            if(!this.state.address.replace(/\s/g, '').length){
                this.setState({invalid:true})
            }else{
                this.setState({invalid:false})
            }
        })
        // console.log(typeof(this.state.address))
    }
    render() {
      return (
        <View>
            <ImageBackground source={require('../../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.header}>
                <Image source={require('../../assets/logotransp.png')}   style={{width: 150, height: 150}}/>
                <Text style={styles.heading}>Welcome to Parcc</Text>
                <Text style={styles.infoText}>Enter an address below to find weather-appropriate activites near your destination!</Text>
            </View>
                <View style={styles.container}>
                    <View style={{flexDirection:"row"}}>
                        <TextInput onChange={(event)=>this.changeHandler(event)}placeholder="Please Enter Your Destination" style={{...webWeights.medium,borderBottomColor:"white", borderBottomWidth:2, padding:10}} autoCompleteType="street-address"></TextInput>
                        <Button title="GO" style={{borderRadius:3, backgroundColor:'green', left:10}} disabled={this.state.invalid} onPress={() => this.advanceFunction()}></Button>
                    </View>
                    
                    
                    
                </View>
            </ImageBackground>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      width: 280,
      height: 70,
      position: 'absolute',
      bottom: 300,
      left: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 5,
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      shadowOffset: {
          height: 0,
          width: 0
      },
      elevation: 2,
      flexDirection: "column",
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 50,
      margin: 8,
      justifyContent: 'center',
    },
    heading: {
        ...webWeights.medium,
        fontSize: 32,
    },
    header:{
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center',
        margin: 20
    },
    infoText:{
        flexDirection:"row",
        textAlign:"center",
        color:"#4d4d4d",
        fontFamily: "Georgia"
    }
    
  });
  
  const mapStateToProps = state => {
    return {
        parkingOptions: state.parking.parkingOptions
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        setParkingOptions: (options) => dispatch(actions.setParkingOptions(options)),
        setAddress: (address) => dispatch(actions.setAddress(address)),
        getParkingPending: (location) => dispatch(actions.getParkingPending(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)