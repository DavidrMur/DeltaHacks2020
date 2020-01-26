import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
const location=(props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alexander Park</Text>
            <Text style={styles.words}>{props.address}</Text>
            <Text style={styles.words}>{props.distance} km from</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
      borderWidth:3,
      borderColor:"#e6e6e6",
      margin:3,
      justifyContent:"flex-start",
  },title:{
      fontFamily:"AvenirNext-DemiBold",
      fontSize:26
  },words:{
      fontSize:14,
      marginTop:3
  }

    });

export default location