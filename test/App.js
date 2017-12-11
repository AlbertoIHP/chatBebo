import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Personajes from './Components/Personajes'
import Lista from './Components/Lista'
import HomeScreen from './Components/HomeScreen'

const Router = StackNavigator({
  Home: { screen: HomeScreen },
  Lista: { screen: Lista },
  Personajes: { screen: Personajes }
})

export default class App extends React.Component {

  render() 
  {
    return <Router style={ styles.container } />
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})