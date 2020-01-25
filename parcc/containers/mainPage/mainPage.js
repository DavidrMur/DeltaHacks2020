import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {AppLoading} from 'expo';

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
        this.props.getParkingPending(this.state.address)
        this.props.navigation.navigate("parkingSpots")
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
                <Image source={require('../../assets/logo.png')}   style={{width: 150, height: 150}}/>
                <Text style={styles.heading}>Welcome to Parccc</Text>
            </View>
                <View style={styles.container}>
                    <View style={{flexDirection:"row"}}>
                        <TextInput onChange={(event)=>this.changeHandler(event)}placeholder="Please Enter Your Address:" style={{borderBottomColor:"white", borderBottomWidth:2, padding:10}} autoCompleteType="street-address"></TextInput>
                        <Button title="GO!" disabled={this.state.invalid} onPress={() => this.advanceFunction()}></Button>
                    </View>
                    
                    
                </View>
            </ImageBackground>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      flex:1,
      alignItems: 'center',
    },
    heading: {
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 32,
    },
    header:{
        flexDirection: "column",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
  });
  
  const mapStateToProps = state => {
    return {
        parkingOptions: state.parking.parkingOptions
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getParkingPending: (location) => dispatch(actions.getParkingPending(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)