"use strict";

import React, { Component } from "react";
import timer from 'react-native-timer'
import moves from './dances'
import song from './songs'
import { Actions } from 'react-native-router-flux'

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
      song: {}
    };
  }

  async componentDidMount() {
    const selectedSong = this.props.arSceneNavigator.viroAppProps.song
    const selectedDance = this.props.arSceneNavigator.viroAppProps.dance
    const songs = await song(selectedSong)
    const dance = await moves(selectedDance)
    this.setState({song: songs})
    timer.setTimeout(this, 'delayMusic', () => this.setState({go: true}), 5000)
    ViroSound.preloadSounds(songs)
    ViroAnimations.registerAnimations(dance)

  }


  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state.go ? <ViroSound
          source='song'
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
