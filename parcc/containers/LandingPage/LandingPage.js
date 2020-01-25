import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


class LandingPage extends Component {
    
    render() {
      return (
        <View>
            <Text style={styles.heading}>Welcome to Parcc</Text>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "pink",
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 32
    }
  });
  

export default  LandingPage