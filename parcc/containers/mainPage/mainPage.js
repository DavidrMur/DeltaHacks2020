import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class MainPage extends Component {
    
    render() {
      console.log('beep boop');
      return (
        <View>
            <ImageBackground source={require('../../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                <Image source={require('../../assets/logo.png')}   style={{width: 100, height: 100}}/>
                    <Text>Welcome to Parccc</Text>
                    <View>
                        <TextInput placeholder="Please Enter Your Address:" style={{borderBottomColor:"white", borderBottomWidth:2, padding:10}}></TextInput>
                        <Button title="GO!" onPress={() => this.props.getParkingPending()}></Button>
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
  
  const mapDispatchToProps = dispatch => {
    return {
        getParkingPending: () => dispatch(actions.getParkingPending())
    };
};

export default connect(null, mapDispatchToProps)(MainPage)