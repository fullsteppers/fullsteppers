import React from "react";
import { Actions } from "react-native-router-flux";
import getTheme from "../native-base-theme/components";
import { Picker } from "react-native";
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
      dance: "salsa"
    };
    this.submitDance = this.submitDance.bind(this);
  }

  submitDance() {
    const dance = this.state.dance;
    Actions.SelectSong({ dance });
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
              <Text>Choose your dance...</Text>
            </CardItem>
            <Picker
              selectedValue={this.state.dance}
              onValueChange={val => {
                this.setState({ dance: val });
              }}
            >
              <Picker.Item label="Salsa" value="salsa" />
              <Picker.Item label="Waltz" value="waltz" />
            </Picker>
            <Container
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Button light title="Select Dance" onPress={this.submitDance}>
                <Text>Do the {this.state.dance}</Text>
              </Button>
            </Container>
          </Card>
        </Container>
      </StyleProvider>
    );
  }
}
