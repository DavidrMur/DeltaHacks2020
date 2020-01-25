import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    }
 }
  test = () => {
    this.props.getParkingPending(this.props.location)
    this.setState({show: true})
  }


    render() {
      return (
        <View>
            <ImageBackground source={require('../../assets/mainPageImage.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                <Image source={require('../../assets/logo.png')}   style={{width: 100, height: 100}}/>
                    <Text>Welcome to Parccc</Text>
                    <View>
                        <TextInput placeholder="Please Enter Your Address:" style={{borderBottomColor:"white", borderBottomWidth:2, padding:10}}></TextInput>
                        <Button title="GO!" onPress={() => this.test()}></Button>
                        {this.props.parkingOptions[0].location ? (
                          <Text>Hola</Text>)
                          : null
                        }
                        {/*<Text>{this.props.parkingOptions && this.props.parkingOptions[0].location}</Text>*/}
                        <Text>{this.state.show ? 'hola' : 'no bueno'}</Text>
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)