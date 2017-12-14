import React from 'react'

import { TouchableHighlight, StyleSheet, Text, View, Alert } from 'react-native'

import { wineService } from '../Services/WineService.service'

//SOCKET
import { socket } from '../Services/socket'

export default class Wine extends React.Component{

	constructor( props )
	{
		super( props )

	}

	longPress()
	{
		
		Alert.alert( 
			` Vino: ${this.props.wine.nombre} `,
			'Eliga una opcion:',
			[
				{ text: 'Eliminar', onPress: () => this.deleteWine() },
				{ text: 'Editar', onPress: () => this.props.navigation.navigate('Edit', { wine: this.props.wine } )},
				{ text: 'Cancelar', onPress: () => console.log('OK Pressed') }
			],
  			{ cancelable: true }

			)
	}

	deleteWine = async function()
	{
		console.log( this.props.wine._id )

		let response = await wineService.destroy( this.props.wine._id )

		socket.emit('someChange')

		if( response != false )
		{
			Alert.alert('Vino eliminado')
			//Avisamos al servidor que hemos hecho un cambio con el evento configurado

		}
		else
		{
			Alert.alert('No se pudo eliminar el vino')
		}

		
		
		
	}

	render()
	{
		return (

			<View style={ styles.parentContainer } >

				<View style={ styles.btnContainer } >

					<TouchableHighlight 
						onLongPress={ () => this.longPress() }
						underlayColor='white'>

						<View style={ styles.btn } >

							<Text style={ styles.text }> { this.props.wine.nombre } </Text>

						</View>

					</TouchableHighlight>

				</View>

			</View>

			)
	}

}

const styles = StyleSheet.create({
	parentContainer:
	{
		flex: 1,
		marginTop: '10%'
	},
	btnContainer:
	{
		width: '70%',
		flex: 2,
		marginLeft: '15%'

	},
	btn:
	{
		backgroundColor: 'skyblue',
		flex: 1
	},
	text:
	{
		height: 70,
		marginLeft: '42%'
	}

})