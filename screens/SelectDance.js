import React from 'react'
import { makeRef } from './../js/firebase'
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
      dance:'foxtrot',
      dances: []
    };
    this.submitDance = this.submitDance.bind(this)
  }

  async componentDidMount(){
    this.dancesRef = makeRef(`/dances`)
    let dances = {}
    dances = await this.dancesRef.once("value")
    .then(snapshot => snapshot.val())

    this.setState({dances: Object.keys(dances)})
  }

  submitDance() {
    const dance = this.state.dance
    Actions.SelectSong({dance})
  }

  render() {
    const dances = this.state.dances || []
    return (
      <View>
        <Text>Select your dance...</Text>
        <Picker
        selectedValue={this.state.dance}
        onValueChange={(val) => {this.setState({dance: val})}}
        >

          {dances.map(dance => (
            <Picker.Item key={dance} label={dance} value={dance} />
          ))}
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
