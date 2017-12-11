import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Vino extends React.Component {

 static navigationOptions = ({ navigation }) => ({
    title: `Vino:  ${navigation.state.params.nombre}` 
  });


  render() 
  {

    const { navigate } = this.props.navigation

    return (
      <Button
        title="Volver a Home"
        onPress={() =>
          navigate('Home')
        }
      />
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

