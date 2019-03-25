import React from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as firebase from "firebase";
import { Actions } from "react-native-router-flux";

export default class DanceName extends React.Component {
  constructor(){
    super()
    this.state ={
      danceName: ''
    }
    this.submitDance = this.submitDance.bind(this)
  }

  submitDance(evt){
    const {dance} = this.props
    const danceName = this.state.danceName
    firebase
    .database()
    .ref(`users/${firebase.auth().currentUser.uid}/dances`)
    .update({
      [danceName]: dance
    });
    Actions.Home()
  }

  handleChange(evt) {
    const newName = evt.target.value
    this.setState({danceName: newName})
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Dance Name</Label>
              <Input
              onChangeText={val => this.setState({ danceName: val })}
              value={this.state.danceName}
              />
            </Item>
            <Button onPress={this.submitDance}>
              <Text>Submit Dance</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
