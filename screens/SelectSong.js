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
import { Actions } from 'react-native-router-flux';

export default class SelectDance extends React.Component {
  constructor() {
    super();

    this.state = {
      track:'song1'
    }
    this.selectSong = this.selectSong.bind(this)
  }

  selectSong() {
    const dance = this.props.dance
    const song = this.state.track
    Actions.DisplayAr({dance, song})
  }

  render() {
    return (
      <View>
        <Text>Select your track...</Text>
        <Picker
        selectedValue={this.state.track}
        onValueChange={(val) => {this.setState({track: val})}}
        >
          <Picker.Item label="Song 1" value="song1" />
          <Picker.Item label="Song 2" value="song2" />
        </Picker>
        <Button
        title='Select Song'
        onPress={this.selectSong}
        />
      </View>
    )
  }
}
