import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {AppLoading} from 'expo';

class MainPage extends Component {
    advanceFunction=()=>{
        this.props.getParkingPending()
        this.props.navigation.navigate("parkingSpots")
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
                        <TextInput placeholder="Please Enter Your Address:" style={{borderBottomColor:"white", borderBottomWidth:2, padding:10}} autoCompleteType="street-address"></TextInput>
                        <Button title="GO!" onPress={() => this.advanceFunction()}></Button>
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
  
  const mapDispatchToProps = dispatch => {
    return {
        getParkingPending: () => dispatch(actions.getParkingPending())
    };
};

export default connect(null, mapDispatchToProps)(MainPage)