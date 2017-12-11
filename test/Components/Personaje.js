import React from 'react';


import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default class Personaje extends React.Component {

	constructor(props)
  	{
  		super(props)

  		this.state = { showImage: true, text: '' }


  	}

  	mostrarImagen() 
  	{

  		this.setState( previousState => {
  			return { showImage: !previousState.showImage }
  		} )

  		console.log(this.state.showImage)
  	}


  	cambiarTexto( newText )
  	{
  		this.setState( previousState => {
  			return { text: newText}
  		})
  	}


  render() 
  {
	if( this.state.showImage )
	 {
		    return (
		     
			      <View style={ styles.parentContainer } >
			      	<View style={ styles.textContainer } >
			      		<Text > 
			      			{ this.props.nombre }  
			      		</Text>
			      	</View>


			      	<View style={ styles.imageContainer } >
			      		<Image source={ this.props.foto } style={ styles.image } />
			      	</View>



			      	<View style={ styles.btnContainer } >
			      		<Button title="Ocultar imagen" onPress= { () => this.mostrarImagen() } />
			      	</View> 			        
			      </View> 
			       )
	 }
	 else
	 {
		    return (
		     
			      <View style={ styles.parentContainer } >

			      	<View style={ styles.inputContainer } >
				        <TextInput value={ this.state.text } style={ styles.inputStyle } placeholder="Prueba el 2 way DB" onChangeText={ (text) => this.cambiarTexto(text) } />
			      	</View>

			      	<View style={ styles.textContainer} >
			      		<Text> { this.state.text } </Text>
			      	</View>

			      	<View style={ styles.btnContainer } >
					 <Button title="Mostrar imagen" onPress= { () => this.mostrarImagen() } />
					</View>

			      </View> 
			       )	 	
	 }	


  
  }


}





const styles = StyleSheet.create({ 
	image:
	{
		width: 200,
		height: 200
	},
	parentContainer:
	{
		flex: 1,
		flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10%'
	},
	textContainer:
	{
		flex: 1
	},
	imageContainer:
	{
		flex: 3
	},
	btnContainer:
	{
		flex:1
	},
	inputContainer:
	{
		flex:1,
		width: '100%'
	},
	inputStyle:
	{
		height: 100
	}

 })