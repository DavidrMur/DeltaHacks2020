
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import WelcomePage from "./containers/LandingPage/LandingPage";
import Mainpage from './containers/mainPage/mainPage'

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});
import reducer from './store//reducers/parking';
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Mainpage/>
        </View>
      </Provider>
    );
  } 
}


