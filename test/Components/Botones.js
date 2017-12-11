import React from 'react';


import { ScrollView, Button, Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';


export default class Botones extends React.Component {

    constructor(props)
    {
        super(props)
    }

  _botonPresionado()
  {
    Alert.alert('Presionaste el boton')
  }

  _botonCargado()
  {
    Alert.alert('Haz dejado presionado el boton un periodo prolongado')
  }


  render() 
  {   

    return (
            <View style={ styles.parentContainer } >
        
                <View style={ styles.btnContainer } >

                   <TouchableHighlight 
                       onPress={this._botonPresionado} 
                       onLongPress={this._botonCargado} 
                       underlayColor="white">

                      <View style={ styles.miBtn } >
                        <Text > { this.props.btnText } </Text>
                      </View>
                      
                    </TouchableHighlight>

                </View>

            </View>
    );
  }


}

const styles = StyleSheet.create({
    parentContainer:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '20%'
    },
    btnContainer:
    {
        width: '100%',
        flex: 1
    },
    miBtn:
    {
        backgroundColor: 'blue',
        width: '90%',
        height: 100
    }
 })