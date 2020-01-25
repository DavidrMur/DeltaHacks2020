import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {AppLoading} from 'expo';
const parkingSpotsScreen=(props)=>{
    return(
        <View style={styles.screen}>
            <Text style={styles.heading}>Here are your potential parking spots:</Text>
        </View>
    );

}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    heading: {
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 32,
    },
});

export default parkingSpotsScreen