import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from "./containers/LandingPage/LandingPage";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
