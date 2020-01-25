
import React, {Component} from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import {AppLoading} from 'expo';

class parkingSpotsScreen extends Component{
    render() {
        return(
    <ImageBackground source={require('../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.screen}>
            <Text style={styles.heading}>Here are your potential parking spots:</Text>
            {<Text>{this.props.parkingOptions[0].Address ? this.props.parkingOptions[0].Address : 'nada'}</Text>}
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
        fontSize: 32,
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(parkingSpotsScreen);