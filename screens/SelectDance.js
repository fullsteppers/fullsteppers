import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Picker,
  Button
} from "react-native";
import { Actions } from 'react-native-router-flux'

export default class SelectDance extends React.Component {
  constructor() {
    super();

    this.state = {
      dance:'salsa'
    };
    this.submitDance = this.submitDance.bind(this)
  }

  submitDance() {
    const dance = this.state.dance
    Actions.SelectSong({dance})
  }

  render() {
    return (
      <View>
        <Text>Select your dance...</Text>
        <Picker
        selectedValue={this.state.dance}
        onValueChange={(val) => {this.setState({dance: val})}}
        >
          <Picker.Item label="Salsa" value="salsa" />
          <Picker.Item label="Waltz" value="waltz" />
        </Picker>
        <Button
        title='Select Dance'
        onPress={this.submitDance}
        >
        Select</Button>
      </View>
    )
  }
}
