import React from 'react'

import { Text, Button, ScrollView, StyleSheet, View, FlatList } from 'react-native'

import { wineService } from '../Services/WineService.service'

import Wine  from './Wine.component'

//SOCKET
import { socket } from '../Services/socket'

export default class WineList extends React.Component {

	static navigationOptions = ( { navigation } ) => ( { 
		title: 'Vinos'
	} )


	constructor (props)
	{
		super(props)

		this.state = { totalWines: [] }

		this.refreshWines()


		//Especificamos el evento qeu configuramos en el servidor
		//Y cuando este ocurra, consultaremos de nuevo la API
		socket.on('someChange', () =>{
			console.log("Alguien cambio algo")
			this.refreshWines()
		} );

	}



	refreshWines = async function()
	{
		let totalWines = await wineService.index()
 
 		totalWines = JSON.parse(JSON.stringify(totalWines))

		this.setState( previousState => {
			previousState.totalWines = totalWines
			return previousState
		} )


		console.log( this.state.totalWines )

	}


	render()
	{

		if( this.state.totalWines.length <= 0)
		{
			return (

				<View style={ styles.parentContainer } >


					<View style={{ flex: 5 }}>

						<Text> Consultando a la API... </Text>

					</View>

					<View style={{ flex: 2 }}>

						<Button color="grey" title="Agregar Vino" onPress={ () => this.props.navigation.navigate('Add') } />
					</View>


				</View>

				)
		}
		else
		{
			return (

				<View style={ styles.parentContainer } >


					<View style={{ flex: 5 }}>

						<ScrollView>	

							<FlatList data={ this.state.totalWines } renderItem={ ( { item } ) => <Wine navigation={ this.props.navigation } wine={ item } /> } />
						
						</ScrollView>

					</View>

					<View style={{ flex: 2 }}>

						<Button color="grey" title="Agregar Vino" onPress={ () => this.props.navigation.navigate('Add') } />
					</View>


				</View>

				)

		}

	}

}

const styles = StyleSheet.create({
	parentContainer:
	{
		flex: 1,
		flexDirection: 'column',
		marginTop: '10%'
	}

})