import React from "react";
import { Actions } from "react-native-router-flux";
import { Picker } from "react-native";
import { makeRef } from "./../js/firebase";
import { Container, Card, CardItem, Text, Button } from "native-base";
import * as firebase from "firebase";

export default class SelectDance extends React.Component {
  constructor() {
    super();

    this.state = {
      dance: "foxtrot",
      allDances: [],
      userDances: [],
      waltz: {}
    };
    this.submitDance = this.submitDance.bind(this);
  }

  async componentDidMount() {
    this.allDancesRef = makeRef(`/dances`);
    let allDances = {};
    allDances = await this.allDancesRef
      .once("value")
      .then(snapshot => snapshot.val());

    this.userDancesRef = makeRef(
      `users/${firebase.auth().currentUser.uid}/dances`
    );
    let userDances = {};
    userDances = await this.userDancesRef
      .once("value")
      .then(snapshot => snapshot.val());

    if (userDances) {
      this.setState({
        userDances: Object.keys(userDances),
        allDances: Object.keys(allDances)
      });
    } else {
      this.setState({
        allDances: Object.keys(allDances)
      });
    }
  }

  submitDance() {
    const dance = this.state.dance;
    Actions.SelectSong({ dance });
  }

  render() {
    const dances =
      this.state.allDances && this.state.userDances
        ? [...this.state.allDances, ...this.state.userDances]
        : [];

    return (
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
    );
  }
}
