import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet,Linking} from 'react-native';
const location=(props)=>{
    let addressURL="https://www.google.com/maps?daddr="
    addressURL+=props.address
    return(
        <TouchableOpacity style={styles.container} onPress={()=>{Linking.openURL(addressURL)}}>
            <Text style={styles.title} >Alexander Park</Text>
            <Text style={styles.words}>{props.address}</Text>
            <Text style={styles.words}>{props.distance} km</Text>
        </TouchableOpacity>
    );

}
const styles = StyleSheet.create({
    container: {
      backgroundColor:"white",
      borderTopWidth:3,
      borderBottomWidth:3,
      borderColor:"white",
      borderRadius:10,
      margin:3,
      paddingLeft:2,
      justifyContent:"flex-start",
  },title:{
      fontFamily:"AvenirNext-DemiBold",
      fontSize:26
  },words:{
      fontSize:18,
      marginTop:3
  }

    });

export default location