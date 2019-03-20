import React from "react";
import { Actions } from "react-native-router-flux";
import getTheme from "../native-base-theme/components";
import { Picker } from "react-native";
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
      track: "song1"
    };
    this.selectSong = this.selectSong.bind(this);
  }

  selectSong() {
    const dance = this.props.dance;
    const song = this.state.track;
    Actions.DisplayAr({ dance, song });
  }

  render() {
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
              onValueChange={val => {
                this.setState({ track: val });
              }}
            >
              <Picker.Item label="Song 1" value="song1" />
              <Picker.Item label="Song 2" value="bass" />
            </Picker>

            <Container
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Button light title="Select Song" onPress={this.selectSong}>
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
