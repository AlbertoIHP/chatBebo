import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Pantalla de Home',
  };

  render() 
  {

    const { navigate } = this.props.navigation

    return (
      <Button title="Ver vino 1" onPress={ () => navigate('Vino', { nombre: 'Vino 1' }) } />
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

