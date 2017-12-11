import React from 'react';


import { Button, ScrollView, FlatList, StyleSheet, View } from 'react-native';
import Botones from './Botones'

export default class HomeScreen extends React.Component {


	constructor(props)
	{
		super(props)
		
	}



  render() 
  {
  	const { navigate } = this.props.navigation

    return (

    		<View style={ styles.parentContainer } >

    			<View style={ styles.btnContainer } >
    				<Button title="Ir a lista de botones" onPress={ () => navigate('Lista', {nombre: 'Vista de Listas'}) } />
    			</View>


    			<View style={ styles.btnContainer } >
    				<Button title="Ir a lista de personajes" onPress={ () => navigate('Personajes') } />
    			</View>

    		</View>

    		)
  }


}

const styles = StyleSheet.create({
	parentContainer:
	{
		flex: 1
	},
	btnContainer:
	{
		flex: 2,
		width: '100%',
		marginBottom: 10,
		marginTop: 10
	}

})