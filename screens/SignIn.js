import React, { Component } from "react";
import { View, Image, Animated, TouchableHighlight } from "react-native";
import { Container, Header, Content, Form, Item, Input } from "native-base";
// var firebase = require("firebase");
// var firebaseui = require("firebaseui");
// import firebase from "react-native-firebase";

// function signInAnonymouslyMethod() {
//   firebase
//     .auth()
//     .signInAnonymously()
//     .catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
// }

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     // User is signed in.
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
//   // ...
// });

export class SignIn extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default SignIn;
