import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './pages/home/home'
import ListScreen from './pages/list/list'
import DetailsSreen from './pages/details/details'
 
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Details: DetailsSreen
  }, 
  {
    initialRouteName: 'Home'
  }
);
 

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


