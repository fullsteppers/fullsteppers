"use strict";

import React, { Component } from "react";
import timer from 'react-native-timer'
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

    this.state = {
      dances: {},
      go: false
    };

  }
  componentDidMount() {
    // this.danceRef = makeRef("/");
    // this.callback = snapshot => {
    //   this.setState({
    //     dances: snapshot.val()
    //   });
    // };
    // this.danceRef.on("value", this.callback);
    timer.setTimeout(this, 'delayMusic', () => this.setState({go: true}), 3000)

    import('./dances').then(moves => moves.default)
    .then(moves => moves.default)
    .then(moves => moves(this.props.arSceneNavigator.viroAppProps.dance))
    .then(moves => {ViroAnimations.registerAnimations(moves)})

    import('./songs').then(songs => songs.default.default)
    .then(songs => songs('song'))
    .then(song => ViroSound.preloadSounds(song))
  }


  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state.go ? <ViroSound
          source={this.props.arSceneNavigator.viroAppProps.song}
          paused={false}
          muted={false}
          loop={false}
          volume={1.0}
        /> : <ViroText text='' /> }

        <ViroImage
          height={0.5}
          width={0.2}
          // rotation={[-90, 0, 0]} these values are good starting values
          // position={[.25, -2, 0]}
          rotation={[-90, 0, 0]}
          position={[0.25, -2, 0]}
          source={require("./res/rightfoot.png")}
          animation = {this.state.go ? {name: "danceRight", run: true, loop:true}
          : {name: 'beginning', run: true}}
        />
        <ViroImage
          height={0.5}
          width={0.2}
          rotation={[-90, 0, 0]}
          position={[-0.25, -2, 0]}
          source={require("./res/leftfoot.png")}
          animation = {this.state.go ? {name: "danceLeft", run: true, loop:true}
          : {name: 'beginning', run: true}}
        />
      </ViroARScene>
    );
  }
}


// ViroAnimations.registerAnimations({
//   wait: { properties: { positionX: "+=0.0" }, duration: 5000 },
//   pause: { properties: { positionX: "+=0.0" }, duration: 1250 },
//   right: { properties: { positionX: "+=0.3" }, duration: 1000 },
//   left: { properties: { positionX: "-=0.3" }, duration: 1000 },
//   up: { properties: { positionZ: "-=0.3" }, duration: 1000 },
//   down: { properties: { positionZ: "+=0.3" }, duration: 1000 },

//   danceRightFoot: [
//     [
//       "wait",
//       "right",
//       "pause",
//       "up",
//       "pause",
//       "left",
//       "pause",
//       "down",
//       "pause",
//       "right",
//       "pause",
//       "up",
//       "pause",
//       "left",
//       "pause",
//       "down"
//     ]
//   ],
//   danceLeftFoot: [
//     [
//       "wait",
//       "pause",
//       "right",
//       "pause",
//       "up",
//       "pause",
//       "left",
//       "pause",
//       "down",
//       "pause",
//       "right",
//       "pause",
//       "up",
//       "pause",
//       "left",
//       "pause",
//       "down"
//     ]
//   ]
// });

// ViroSound.preloadSounds({
//   song: "http://www.largesound.com/ashborytour/sound/brobob.mp3"
// });

module.exports = HelloWorldSceneAR;
