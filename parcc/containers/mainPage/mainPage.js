import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';


class MainPage extends Component {
    
    render() {
      return (
        <View>
            <ImageBackground source={require('../../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                <Image source={require('../../assets/logo.png')}   style={{width: 100, height: 100}}/>
                    <Text>Welcome to Parccc</Text>
                    <View>
                        <TextInput placeholder="Please Enter Your Address:" style={{borderBottomColor:"white", borderBottomWidth:2, padding:10}}></TextInput>
                        <Button title="GO!"></Button>
                    </View>
                    
                    
                </View>
            </ImageBackground>
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
  

export default MainPage