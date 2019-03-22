import React from "react";
import { Actions } from "react-native-router-flux";
import getTheme from "../native-base-theme/components";
import { Picker } from "react-native";
import { makeRef } from "./../js/firebase";
import {
  Container,
  Card,
  CardItem,
  Text,
  Button,
  StyleProvider
} from "native-base";

export default class SelectSong extends React.Component {
  constructor() {
    super();

    this.state = {
      track: "song1",
      songs: []
    };
    this.selectSong = this.selectSong.bind(this);
  }

  async componentDidMount() {
    this.songsRef = makeRef(`/songs`);
    let songs = {};
    songs = await this.songsRef.once("value").then(snapshot => snapshot.val());

    const currDance = this.props.dance;
    const songsKeys = Object.keys(songs);

    const filterTracks = songsKeys.filter(song => {
      return songs[song]["dance"].toLowerCase() === currDance;
    });

    if (filterTracks.length === 0) {
      this.setState({
        songs: songsKeys,
        track: songsKeys[0]
      });
    } else {
      this.setState({ songs: filterTracks, track: filterTracks[0] });
    }
  }

  selectSong() {
    const dance = this.props.dance;
    const song = this.state.track;
    Actions.DisplayAr({ dance, song });
  }

  render() {
    const songs = this.state.songs || [];
    return (
      <StyleProvider style={getTheme()}>
        <Container
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Card transparent>
            <CardItem
              style={{
                paddingTop: 50
              }}
            >
              <Text>Choose your track...</Text>
            </CardItem>
            <Picker
              selectedValue={this.state.track}
              onValueChange={async val => {
                await this.setState({ track: val });
              }}
            >
              {songs.map(song => (
                <Picker.Item key={song} label={song} value={song} />
              ))}
            </Picker>
            <Container
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Button
                light
                vertical
                title="Select Song"
                onPress={this.selectSong}
              >
                <Text>
                  Do the {this.props.dance} to {this.state.track}
                </Text>
              </Button>
            </Container>
          </Card>
        </Container>
      </StyleProvider>
    );
  }
}
