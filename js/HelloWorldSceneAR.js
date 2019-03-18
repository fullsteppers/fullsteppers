"use strict";

import React, { Component } from "react";
import timer from 'react-native-timer'

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
      go: false
    };

  }
  componentDidMount() {
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


module.exports = HelloWorldSceneAR;
