import React from "react";
import { View, Text, Image, Animated, TouchableHighlight } from "react-native";
import { Col, Row, Grid, Button } from "native-base";
export const CreateDanceMenu = props => {
  const { move, disabled } = props;
  return (
    <Grid>
      <Row>
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("left", "forward")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{
                width: 20,
                height: 20,
                transform: [{ rotate: "45deg" }]
              }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("stay", "forward")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{
                width: 20,
                height: 20,
                transform: [{ rotate: "90deg" }]
              }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("right", "forward")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{
                width: 20,
                height: 20,
                transform: [{ rotate: "135deg" }]
              }}
            />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("left", "stay")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{ width: 20, height: 20 }}
            />
          </Button>
        </Col>
        <Col />
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("right", "stay")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{
                width: 20,
                height: 20,
                transform: [{ rotate: "180deg" }]
              }}
            />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("left", "backward")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{
                width: 20,
                height: 20,
                transform: [{ rotate: "315deg" }]
              }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("stay", "backward")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{
                width: 20,
                height: 20,
                transform: [{ rotate: "270deg" }]
              }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            light
            style={{ height: 20, width: 20 }}
            onPress={() => move("right", "backward")}
            disabled={disabled}
          >
            <Image
              source={require("./res/back_arrow.png")}
              style={{
                width: 20,
                height: 20,
                transform: [{ rotate: "225deg" }]
              }}
            />
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default CreateDanceMenu;
