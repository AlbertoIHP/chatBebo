import React from 'react'

import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { wineService } from '../Services/WineService.service'


//SOCKET
import { socket } from '../Services/socket'

export default class AddWine extends React.Component {

     static navigationOptions = ({ navigation }) => ({
        title: 'Agregar Vino' 
      });


	constructor(props)
	{
		super(props)

		this.state = { newWine: { _id: '', nombre: '', uva: ''} }

	}

	changeNombre( newNombre )
	{
		
		this.setState( previousState => {
			previousState.newWine.nombre = newNombre
			return previousState
		} )
	}

	changeUva( newUva )
	{
		
		this.setState( previousState => {
			previousState.newWine.uva = newUva
			return previousState
		} )

	}


	addWine = async function( navigate )
	{
		
		
		if( this.state.newWine.nombre != '' && this.state.newWine.uva != '')
		{
			let response = await wineService.store( this.state.newWine )

			if( response )
			{
				Alert.alert('Vino agregado')

				//Avisamos al servidor que hemos hecho un cambio con el evento configurado
				socket.emit('someChange')


				this.props.navigation.goBack(null)	
			}
			else
			{
				Alert.alert('No se ha podido agregar el vino')
			}
		}
		else
		{
			Alert.alert('Rellene los campos porfavor...')
		}		
	}


	render()
	{

		return (

			<View style={ styles.parentContainer }>

				<View style={{ flex : 2 }}>

					<TextInput 
						value={ this.state.newWine.nombre }
						style={ styles.inputStyle }
						placeholder='Ingrese el nombre del vino'
						onChangeText={ ( nombre ) => this.changeNombre( nombre ) }
					/>

				</View>

				<View style={{ flex : 2 }}>

					<TextInput 
						value={ this.state.newWine.uva }
						style={ styles.inputStyle }
						placeholder='Ingrese la uva del vino'
						onChangeText={ ( uva ) => this.changeUva( uva ) }
					/>

				</View>

				<View style={{ flex : 2 }}>

					<Button title="Agregar" onPress={ () => this.addWine( ) } />

				</View>

			</View>

			)
	}


}

const styles = StyleSheet.create( { 
	parentContainer: 
	{
		flex: 1
	},
	inputStyle:
	{
		width: '100%',
		height: 160
	}
} )