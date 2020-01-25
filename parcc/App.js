
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { watchParking } from './store/sagas/index';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import createSagaMiddleware from 'redux-saga';
import WelcomePage from "./containers/LandingPage/LandingPage";
import Mainpage from './containers/mainPage/mainPage'

const sagaMiddleware = createSagaMiddleware();

import reducer from './store//reducers/parking';
const store = createStore(reducer, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchParking);

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


