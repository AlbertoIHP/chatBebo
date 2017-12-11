import React from 'react';


import { ScrollView, FlatList, StyleSheet, View } from 'react-native';
import Personaje from './Personaje'

export default class Personajes extends React.Component {

     static navigationOptions = ({ navigation }) => ({
        title: 'Personajes' 
      });

	 constructor(props)
	 {
	 	super(props)

		let info = [ 
		  { foto: {uri: 'http://angular.github.io/react-native-renderer/assets/react.png'}, nombre: 'Hulk'  }, 
		  { foto: {uri: 'http://angular.github.io/react-native-renderer/assets/react.png'}, nombre: 'Vegetta'  } ]   

	 	this.state = { info: info }
	 	this.init()
	 }


	 init()
	 {
	 	console.log(this.state.info)
	 }




  render() 
  {

    return (
        <ScrollView>
            <View style={ styles.parentContainer } >
            	<FlatList data={ this.state.info } renderItem={ ({ item }) => <Personaje nombre={ item.nombre } foto={ item.foto } /> } />
            </View>
        </ScrollView>
    		)
  }


}

const styles = StyleSheet.create({
    parentContainer:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10%'
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
        height: '20%'
    }
 })