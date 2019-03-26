"use strict";

import React, { Component } from "react";
import timer from 'react-native-timer'
import moves from './dances'
import song from './songs'

import {
  ViroARScene,
  ViroText,
  ViroImage,
  ViroSound,
  ViroAnimations
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    this.state = {
      go: false,
    };

    this.finish = this.finish.bind(this)
  }


  async componentDidMount() {
    const dance = this.props.arSceneNavigator.viroAppProps.dance
    console.log(dance)
    ViroAnimations.registerAnimations(dance)
    timer.setTimeout('startDance', () => {
      this.setState({ go: true })
    }, 3000);
  }

  finish() {

    this.props.arSceneNavigator.viroAppProps.exit()
  }

  render() {
    if (!this.state.go) {
      return (
        <ViroARScene>
          <ViroText
            text="loading..."
            color='black'
            width={2} height={2}
            rotation={[-90, 0, 0]}
            position={[0.25, -2, 0]} />
        </ViroARScene>
      )
    } else {
      return (

        <ViroARScene>

          <ViroImage
            height={0.5}
            width={0.2}
            rotation={[-90, 0, 0]}
            position={[.25, -2, 0]}
            source={require("./res/rightfoot.png")}
            animation={{ name: "danceRight", run: true, loop: false, onFinish: this.finish }}
          />
          <ViroImage
            height={0.5}
            width={0.2}
            rotation={[-90, 0, 0]}
            position={[-.25, -2, 0]}
            source={require("./res/leftfoot.png")}
            animation={{ name: "danceLeft", run: true, loop: false, onFinish: this.finish }}
          />
        </ViroARScene>
      );
    }
  }
}


module.exports = HelloWorldSceneAR;
