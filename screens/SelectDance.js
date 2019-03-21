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
  StyleProvider,
  Button
} from "native-base";

export default class SelectDance extends React.Component {
  constructor() {
    super();

    this.state = {
      dance: "foxtrot",
      dances: [],
      waltz: {}
    };
    this.submitDance = this.submitDance.bind(this);
  }

  async componentDidMount() {
    this.dancesRef = makeRef(`/dances`);
    let dances = {};
    dances = await this.dancesRef
      .once("value")
      .then(snapshot => snapshot.val());

    this.setState({ dances: Object.keys(dances) });
  }

  submitDance() {
    const dance = this.state.dance;
    Actions.SelectSong({ dance });
  }

  render() {
    const dances = this.state.dances || [];
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
              <Text>Choose your dance...</Text>
            </CardItem>
            <Picker
              selectedValue={this.state.dance}
              onValueChange={async val => {
                await this.setState({ dance: val });
              }}
            >
              {dances.map(dance => (
                <Picker.Item key={dance} label={dance} value={dance} />
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
                title="Select Dance"
                onPress={this.submitDance}
              >
                <Text>Do the {this.state.dance}</Text>
              </Button>
            </Container>
          </Card>
        </Container>
      </StyleProvider>
    );
  }
}
