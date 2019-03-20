import React from "react";
import {
  AppRegistry,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Platform,
  PixelRatio,
  Picker
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  StyleProvider,
  Button
} from "native-base";

import { Actions } from "react-native-router-flux";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
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
            <Text style={textStyles.responsiveText}>Choose your dance...</Text>
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
    );
  }
}
textStyles = StyleSheet.create({
  responsiveText: {
    fontSize: normalize(24)
    // maxWidth: Dimensions.get("window").width * 2
  }
});
