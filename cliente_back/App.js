import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Components/Home'
import Vino from './Components/Vino'


const Router = StackNavigator({
  Home: { screen: Home },
  Vino: { screen: Vino }
});



export default class App extends React.Component {
  render() {
    return <Router style="styles.container" />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});