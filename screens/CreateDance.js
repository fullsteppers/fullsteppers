import React from "react";
import { View, Image, Animated, TouchableHighlight } from "react-native";
import { Col, Row, Grid, Button, Text } from "native-base";
import CreateDanceMenu from "../js/CreateDanceMenu";
import { addMove, submitDance } from "../js/movesFunctions";
import { Actions } from "react-native-router-flux";

export default class createDance extends React.Component {
  constructor() {
    super();
    this.state = {
      leftX: 100,
      leftY: 170,
      rightX: 145,
      rightY: 170,
      currentFoot: "right",
      leftMoves: [],
      rightMoves: [],
      currentMove: "",
      disabled: false
    };
    this.moveAnimationLeft = new Animated.ValueXY({
      x: this.state.leftX,
      y: this.state.leftY
    });
    this.moveAnimationRight = new Animated.ValueXY({
      x: this.state.rightX,
      y: this.state.rightY
    });
    this.move = this.move.bind(this);
    this.addMoveMethod = this.addMoveMethod.bind(this);
    this.switchFoot = this.switchFoot.bind(this);
    this.submitDanceMethod = this.submitDanceMethod.bind(this);
    this.undo = this.undo.bind(this);
  }

  move(x, y) {
    let newMove = "";
    let newX =
      this.state.currentFoot === "right" ? this.state.rightX : this.state.leftX;
    let newY =
      this.state.currentFoot === "right" ? this.state.rightY : this.state.leftY;
    if (y === "forward") {
      newY -= 100;
      this.setState({
        [`${this.state.currentFoot}Y`]: newY
      });
      newMove += `${y}`;
    } else if (y === "backward") {
      newY += 100;
      this.setState({
        [`${this.state.currentFoot}Y`]: newY
      });
      newMove += `${y}`;
    }
    if (x === "right") {
      newX += 60;
      this.setState({
        [`${this.state.currentFoot}X`]: newX
      });
      newMove += `${x}`;
    } else if (x === "left") {
      newX -= 60;
      this.setState({
        [`${this.state.currentFoot}X`]: newX
      });
      newMove += `${x}`;
    }
    if (this.state.currentFoot === "right") {
      Animated.spring(this.moveAnimationRight, {
        toValue: { x: newX, y: newY }
      }).start();
    } else {
      Animated.spring(this.moveAnimationLeft, {
        toValue: { x: newX, y: newY }
      }).start();
    }
    //and then set state with addmove(moves)
    this.setState({
      currentMove: newMove,
      disabled: true
    });
  }

  addMoveMethod() {
    const moves = addMove(this.state.currentMove);
    if (this.state.currentFoot === "right") {
      this.setState({
        rightMoves: [...this.state.rightMoves, moves.newMove],
        leftMoves: [...this.state.leftMoves, moves.otherMove],
        currentMove: "",
        disabled: false
      });
    } else {
      this.setState({
        leftMoves: [...this.state.leftMoves, moves.newMove],
        rightMoves: [...this.state.rightMoves, moves.otherMove],
        currentMove: "",
        disabled: false
      });
    }
  }

  submitDanceMethod() {
    submitDance(this.state.leftMoves, this.state.rightMoves);
    Actions.Home();
  }

  switchFoot() {
    this.state.currentFoot === "right"
      ? this.setState({ currentFoot: "left" })
      : this.setState({ currentFoot: "right" });
  }

  async undo() {
    if (this.state.rightMoves.length > 0) {
      const reverseStepY = {
        forward: "backward",
        backward: "forward"
      };
      const reverseStepX = {
        right: "left",
        left: "right"
      };

      let x = "";
      let y = "";
      const foot = this.state.rightMoves[this.state.rightMoves.length - 1].pause
        ? "left"
        : "right";

      let step = Object.keys(
        this.state[`${foot}Moves`][this.state[`${foot}Moves`].length - 1]
      )[0];
      for (let key in reverseStepY) {
        if (step.includes(key)) {
          y = reverseStepY[key];
        }
      }
      for (let key in reverseStepX) {
        if (step.includes(key)) {
          x = reverseStepX[key];
        }
      }
      await this.setState({ currentFoot: foot });
      this.move(x, y);
      const newRight = this.state.rightMoves.slice(
        0,
        this.state.rightMoves.length - 1
      );
      const newLeft = this.state.leftMoves.slice(
        0,
        this.state.leftMoves.length - 1
      );

      this.setState({
        rightMoves: newRight,
        leftMoves: newLeft,
        disabled: false
      });
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <Grid>
            <Row size={4}>
              <Animated.View
                style={[
                  {
                    backgroundColor: "transparent"
                  },
                  this.moveAnimationLeft.getLayout()
                ]}
              >
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
            </Row>
            <Row size={1}>
              <Col>
                <Button onPress={this.addMoveMethod}>
                  <Text>Add Move</Text>
                </Button>
                <Button vertical onPress={this.submitDanceMethod}>
                  <Text>Save Dance</Text>
                </Button>
                <Button onPress={this.undo}>
                  <Text>Undo</Text>
                </Button>
              </Col>
              <Col>
                <CreateDanceMenu
                  move={this.move}
                  disabled={this.state.disabled}
                />
              </Col>
              <Col>
                <Text note>Current foot: {this.state.currentFoot}</Text>
                <Button onPress={this.switchFoot}>
                  <Text>Switch</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </View>
        <View />
      </View>
    );
  }
}
