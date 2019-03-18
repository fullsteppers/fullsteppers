"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";
import { makeRef } from "./firebase";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroImage,
  ViroSound,
  ViroAnimations
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      dances: {}
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }
  componentDidMount() {
    this.danceRef = makeRef("/");
    this.callback = snapshot => {
      this.setState({
        dances: snapshot.val()
      });
    };
    this.danceRef.on("value", this.callback);
  }

  componentWillUnmount() {
    this.danceRef.off("value", this.callback);
  }

  // this.props.arSceneNavigator.viroAppProps.song
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroSound
          source={"song"}
          paused={false}
          muted={false}
          loop={false}
          volume={1.0}
          ///* source={require("./res/song.mp3")} */
        />
        {/* <ViroText
          text={JSON.stringify(this.state.dances)}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        /> */}
        <ViroImage
          height={0.5}
          width={0.2}
          // rotation={[-90, 0, 0]} these values are good starting values
          // position={[.25, -2, 0]}
          rotation={[-90, 0, 0]}
          position={[0.25, -2, 0]}
          source={require("./res/rightfoot.png")}
          animation={{
            name: "danceRightFoot",
            run: true,
            loop: true
          }}
        />
        <ViroImage
          height={0.5}
          width={0.2}
          rotation={[-90, 0, 0]}
          position={[-0.25, -2, 0]}
          source={require("./res/leftfoot.png")}
          animation={{
            name: "danceLeftFoot",
            run: true,
            loop: true
          }}
        />

      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

ViroAnimations.registerAnimations({
  wait: { properties: { positionX: "+=0.0" }, duration: 5000 },
  pause: { properties: { positionX: "+=0.0" }, duration: 1250 },
  right: { properties: { positionX: "+=0.3" }, duration: 1000 },
  left: { properties: { positionX: "-=0.3" }, duration: 1000 },
  up: { properties: { positionZ: "-=0.3" }, duration: 1000 },
  down: { properties: { positionZ: "+=0.3" }, duration: 1000 },

  danceRightFoot: [
    [
      "wait",
      "right",
      "pause",
      "up",
      "pause",
      "left",
      "pause",
      "down",
      "pause",
      "right",
      "pause",
      "up",
      "pause",
      "left",
      "pause",
      "down"
    ]
  ],
  danceLeftFoot: [
    [
      "wait",
      "pause",
      "right",
      "pause",
      "up",
      "pause",
      "left",
      "pause",
      "down",
      "pause",
      "right",
      "pause",
      "up",
      "pause",
      "left",
      "pause",
      "down"
    ]
  ]
});

ViroSound.preloadSounds({
  song: "http://www.largesound.com/ashborytour/sound/brobob.mp3"
});

module.exports = HelloWorldSceneAR;
