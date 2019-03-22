import React from "react";
import { Actions } from "react-native-router-flux";
import getTheme from "../native-base-theme/components";
import {
  Container,
  Card,
  CardItem,
  Text,
  Button,
  StyleProvider
} from "native-base";

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
        // ...
      });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // ...
        console.log("user is signed in");
      } else {
        // User is signed out.
        console.log("user is signed out");

        // ...
      }
      // ...
    });
    // if (firebase.auth().currentUser !== null) {
    console.log("user id: " + firebase.auth().currentUser);
    // }
  }

  selectDance() {
    Actions.SelectDance();
  }

  createDance() {
    Actions.CreateDance();
  }

  render() {
    // if (firebase.auth().currentUser !== null) {
    console.log("user id: " + firebase.auth().currentUser);
    // }

    return (
      <StyleProvider style={getTheme()}>
        <Container style={{ flexDirection: "column" }}>
          <Card transparent>
            <CardItem>
              <Text>
                Fullsteppers is your AR dance instructor. Here's some more text
                to see how line 2 works. And more to see if line 3 renders just
                fine.
              </Text>
            </CardItem>
            <CardItem>
              <Container
                style={{
                  flexDirection: "row",
                  justifyContent: "center"
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
      </StyleProvider>
    );
  }
}
