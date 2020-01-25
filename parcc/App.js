import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from "./containers/LandingPage/LandingPage";
import Mainpage from './containers/mainPage/mainPage'
export default function App() {
  return (
    <View>
      <Mainpage/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

