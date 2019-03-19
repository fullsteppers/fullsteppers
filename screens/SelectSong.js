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
import { Actions } from 'react-native-router-flux';

export default class SelectDance extends React.Component {
  constructor() {
    super();

    this.state = {
      track:'song1',
      songs: []
    }
    this.selectSong = this.selectSong.bind(this)
  }

  async componentDidMount() {
    this.songsRef = makeRef(`/songs`)
    let songs = {}
    songs = await this.songsRef.once("value")
    .then(snapshot => snapshot.val())

    const currDance = this.props.dance
    const songsKeys = Object.keys(songs)

    const filterTracks = songsKeys.filter(song => {
      return songs[song]['dance'].toLowerCase() === currDance
    })

    this.setState({songs: filterTracks, track: filterTracks[0]})
  }

  selectSong() {
    const dance = this.props.dance
    const song = this.state.track
    Actions.DisplayAr({dance, song})
  }

  render() {
    const songs = this.state.songs || []
    return (
      <View>
        <Text>Select your track...</Text>
        <Picker
        selectedValue={this.state.track}
        onValueChange={(val) => {this.setState({track: val})}}
        >
          {songs.map(song => (
            <Picker.Item key={song} label={song} value={song} />
          ))}
        </Picker>
        <Button
        title='Select Song'
        onPress={this.selectSong}
        />
      </View>
    )
  }
}
