import React from "react";
import { Actions } from "react-native-router-flux";
import { Container, Card, CardItem, Text, Button } from "native-base";
import { Animated, Image } from 'react-native'
import Slider from "react-native-slider";

export default class SelectStanceWidth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0.3,
      // leftX: -20,
      leftX: -36,
      leftY: 0,
      // rightX: 15,
      rightX: 36,
      rightY: 0,
    };
    this.submitStance = this.submitStance.bind(this);
    this.changeValue = this.changeValue.bind(this)
    this.moveAnimationLeft = new Animated.ValueXY({
      x: this.state.leftX,
      y: this.state.leftY
    });
    this.moveAnimationRight = new Animated.ValueXY({
      x: this.state.rightX,
      y: this.state.rightY
    });
  }

  submitStance() {
    const stance = this.state.value;
    const dance = this.props.dance;
    const song = this.props.song;
    Actions.SelectTiming({ dance, song, stance });
  }

  changeValue(value) {
    this.setState({value})
    const coef = value*120
    Animated.spring(this.moveAnimationLeft, {
      toValue: { x: -coef, y: 0 }
    }).start();
    Animated.spring(this.moveAnimationRight, {
      toValue: { x: coef, y: 0 }
    }).start();
  }

  render() {
    return (
      <Container style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <Container
          style={{
            flex: 1,
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
              <Text>Choose your stance width...</Text>
            </CardItem>

            <Slider
              value={this.state.value}
              onValueChange={value => {this.changeValue(value)}}
            />
            <Text>Value: {this.state.value.toFixed(2)}</Text>
            <Container
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Button
                light
                vertical
                title="Select Stance"
                onPress={this.submitStance}
              >
                <Text>Select Stance</Text>
              </Button>
            </Container>
          </Card>
        </Container>
        <Container style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center"
          }}>
          <Animated.View style={[this.moveAnimationLeft.getLayout()]}>
            <Image
              source={require("./../js/res/leftfoot.png")}
              style={{
                width: 66,
                height: 160
              }}
            />
          </Animated.View>
          <Animated.View style={[this.moveAnimationRight.getLayout()]}>
            <Image
              source={require("./../js/res/rightfoot.png")}
              style={{
                width: 66,
                height: 160
              }}
            />
          </Animated.View>
        </Container>
      </Container>
    );
  }
}
