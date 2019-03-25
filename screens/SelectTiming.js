import React from "react";
import { Actions } from "react-native-router-flux";
import { Picker } from "react-native";
<<<<<<< HEAD
import {
    Container,
    Card,
    CardItem,
    Text,
    StyleProvider,
    Button,
    Toast
} from "native-base";
=======
import { Container, Card, CardItem, Text, Button } from "native-base";
>>>>>>> c3a9156168f27ed154b37b093d6d1c923f2da96f

export default class SelectStanceWidth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timing: 1
    };
    this.submitTiming = this.submitTiming.bind(this);
  }

    submitTiming() {
        const timing = this.state.timing;
        const stance = this.props.stance;
        const dance = this.props.dance;
        const song = this.props.song;
        Toast.show({
            text: 'Caution: Be sure to allow enough room around you!',
            duration: 3000,
            type: 'warning'
          })

        Actions.DisplayAr({ dance, song, stance, timing });
    }

  render() {
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
            <Text>Choose your dance speed...</Text>
          </CardItem>
          <Picker
            selectedValue={this.state.timing}
            onValueChange={async val => {
              await this.setState({ timing: val });
            }}
          >
            <Picker.Item label={"Half-Time (Slow)"} value={0.5} />
            <Picker.Item label={"Normal Time"} value={1.0} />
            <Picker.Item label={"Double-Time (Fast)"} value={2.0} />
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
              title="Select Dance Speed"
              onPress={this.submitTiming}
            >
              <Text>Start Dancing!</Text>
            </Button>
          </Container>
        </Card>
      </Container>
    );
  }
}
