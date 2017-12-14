import React from 'react'

import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { wineService } from '../Services/WineService.service'


//SOCKET
import { socket } from '../Services/socket'

export default class EditWine extends React.Component {
     static navigationOptions = ({ navigation }) => ({
        title: `Editando Vino: ${ navigation.state.params.wine.nombre } `
      })


	constructor(props)
	{
		super(props)

		let editWine = {
			 _id: this.props.navigation.state.params.wine._id, 
			 nombre: this.props.navigation.state.params.wine.nombre, 
			 uva: this.props.navigation.state.params.wine.uva
		}


		this.state = { editWine: editWine }


	}

	changeNombre( newNombre )
	{
		this.setState( previousState => {
			previousState.editWine.nombre = newNombre
			return previousState
		} )
	}

	changeUva( newUva )
	{
		this.setState( previousState => {
			previousState.editWine.uva = newUva
			return previousState
		} )
	}


	editWine = async function()
	{
		const { navigate } = this.props.navigation

		if( this.state.editWine.nombre != '' && this.state.editWine.uva != '')
		{

			let response = await wineService.update( this.state.editWine._id, this.state.editWine )

			if( response )
			{
				Alert.alert('Vino editado')


				//Avisamos al servidor que hemos hecho un cambio con el evento configurado
				socket.emit('someChange')


				this.props.navigation.goBack(null)
			}
			else
			{
				Alert.alert('No se pudo editar el vino')
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
						value={ this.state.editWine.nombre }
						style={ styles.inputStyle }
						placeholder='Ingrese el nombre del vino'
						onChangeText={ ( nombre ) => this.changeNombre( nombre ) }
					/>

				</View>

				<View style={{ flex : 2 }}>

					<TextInput 
						value={ this.state.editWine.uva }
						style={ styles.inputStyle }
						placeholder='Ingrese la uva del vino'
						onChangeText={ ( uva ) => this.changeUva( uva ) }
					/>

				</View>

				<View style={{ flex : 2 }}>

					<Button title="Editar" onPress={ () => this.editWine() } />

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