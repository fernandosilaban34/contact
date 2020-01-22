import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {HomeScreen} from './android/app/screeen/home/index';

const HomeNavigator = createDrawerNavigator({
  Home : {
    screen: HomeScreen
  }
},
{
  initialRouteName: 'Home',
  contentComponent: props => <CostumDrawer {...props} />
}
);

const Navigator = createStackNavigator(
  {
    HomeNavigator
  },
  {
    initialRouteName: 'HomeNavigator',
    headerMode: 'none'
  }
);


const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
