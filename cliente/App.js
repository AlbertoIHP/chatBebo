import React from 'react'

import { StyleSheet } from 'react-native'

import { StackNavigator } from 'react-navigation'

import WineList from './Components/WineList.component'
import AddWine from './Components/AddWine.component'
import EditWine from './Components/EditWine.component'

const Router = StackNavigator({
  Home: { screen: WineList },
  Edit: { screen: EditWine },
  Add: { screen: AddWine }
})

export default class App extends React.Component {

  render()
  {
    return <Router style={ styles.container } />
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})