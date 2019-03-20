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

export default class Home extends React.Component {
  constructor() {
    super();
    this.SelectDance = this.selectADance.bind(this);
  }

  selectADance() {
    Actions.SelectDance();
  }

  render() {
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
                <Button
                  light
                  title="Select a Dance"
                  onPress={this.selectADance}
                >
                  <Text>Select a Dance</Text>
                </Button>
              </Container>
            </CardItem>
          </Card>
        </Container>
      </StyleProvider>
    );
  }
}
