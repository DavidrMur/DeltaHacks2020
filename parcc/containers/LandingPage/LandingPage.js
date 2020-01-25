import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


class LandingPage extends Component {
    
    render() {
      return (
        <View>
            <Text style={styles.container}>Welcome to Parcc</Text>
            <Text style={styles.container}>Welcome to Parcc</Text>
            
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default  LandingPage