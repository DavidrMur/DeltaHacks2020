import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {AppLoading} from 'expo';
const parkingSpotsScreen=(props)=>{
    return(
    <ImageBackground source={require('../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.screen}>
            <Text style={styles.heading}>Here are your potential parking spots:</Text>
        </View>
    </ImageBackground>
    );

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

export default parkingSpotsScreen