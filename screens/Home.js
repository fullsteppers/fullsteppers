import React from 'react'
import  { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Home extends React.Component {
  constructor(){
    super()
    this.SelectDance = this.selectADance.bind(this)
  }
  selectADance() {
    Actions.SelectDance()
  }

  render() {
    return (
      <View>
        <Button
        title='Select a Dance'
        onPress={this.selectADance}
        >
        Select</Button>
      </View>
    )
  }
}
