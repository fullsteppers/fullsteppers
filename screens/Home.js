import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  PixelRatio,
  ImageBackground
} from "react-native";
import getTheme from "../native-base-theme/components";
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
      <Container style={{ flexDirection: "column" }}>
        <Card transparent>
          <CardItem>
            <Text style={textStyles.responsiveText}>
              Fullsteppers is your AR dance instructor. Here's some more text to
              see how line 2 works.And more to see if line 3 renders just fine.
            </Text>
          </CardItem>
          <CardItem>
            <Container
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Button light title="Select a Dance" onPress={this.selectADance}>
                <Text>Select a Dance</Text>
              </Button>
            </Container>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

//who are we? name & logo
//what can we do? we teach you to dance
textStyles = StyleSheet.create({
  responsiveText: {
    fontSize: normalize(24)
    // maxWidth: Dimensions.get("window").width * 2
  }
});
