import React from "react";
import { Actions } from "react-native-router-flux";
import { Container, Card, CardItem, Text, Button } from "native-base";

var firebase = require("firebase");

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.SelectDance = this.selectDance.bind(this);
  }

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
      } else {
        // User is signed out.
      }
    });
  }

  selectDance() {
    Actions.SelectDance();
  }

  createDance() {
    Actions.CreateDance();
  }

  render() {
    return (
      <Container style={{ flexDirection: "column" }}>
        <Card transparent>
          <CardItem>
            <Text>
              Fullsteppers is your AR dance instructor. Here's some more text to
              see how line 2 works. And more to see if line 3 renders just fine.
            </Text>
          </CardItem>
          <CardItem>
            <Container
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Button light title="Select a Dance" onPress={this.selectDance}>
                <Text>Select a Dance</Text>
              </Button>
              <Button light title="Create a Dance" onPress={this.createDance}>
                <Text>Create a Dance</Text>
              </Button>
            </Container>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
