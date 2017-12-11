import React from 'react';


import { ScrollView, FlatList, StyleSheet, View } from 'react-native';
import Botones from './Botones'

export default class Lista extends React.Component {

     static navigationOptions = ({ navigation }) => ({
        title:`Botones:  ${navigation.state.params.nombre}` 
      });

	 constructor(props)
	 {
	 	super(props)

		let info = [ 
		  { nombre: 'Rodrigo', edad: '12 años' }, 
		  { nombre: 'Manuel', edad: '18' } ]   

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
            	<FlatList data={ this.state.info } renderItem={ ({item}) => <Botones btnText={ item.nombre } /> } />
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