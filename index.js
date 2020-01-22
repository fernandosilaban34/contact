/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Root} from 'native-base';
import App from './App';
import {name as appName} from './app.json';

export default class ReduxCounter extends Component {
    render() {
      return (
        <Root>
        <App />
        </Root>
      );
    }
  }
AppRegistry.registerComponent(appName, () => App);
