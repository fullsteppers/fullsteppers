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
      danceGo: false,
      loop: true
    };
  }


  async componentDidMount() {
    const selectedSong = this.props.arSceneNavigator.viroAppProps.song
    const selectedDance = this.props.arSceneNavigator.viroAppProps.dance
    const selectedTiming = this.props.arSceneNavigator.viroAppProps.timing
    const songObj = await song(selectedSong)
    const BPM = songObj.BPM * selectedTiming
    const dance = await moves(selectedDance, BPM)
    await ViroSound.preloadSounds({ "song": songObj.audioUrl })
    ViroAnimations.registerAnimations(dance)
    this.setState({ go: true })
    timer.setTimeout('startDance', () => {
      this.setState({ danceGo: true })
    }, 3000);
  }

  componentWillUnmount() {
    timer.clearTimeout('startDance')
  }

  render() {
    const selectedStance = this.props.arSceneNavigator.viroAppProps.stance
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

        <ViroARScene onTrackingUpdated={this._onInitialized}>
          {this.state.go ? <ViroSound
            source="song"
            paused={false}
            muted={false}
            loop={false}
            volume={1.0}
          /> : <ViroText text='' />}

          <ViroImage
            height={0.5}
            width={0.2}
            rotation={[-90, 0, 0]}
            position={[(selectedStance / 2), -2, 0]}
            // position={[0.2, -2, 0]}
            source={require("./res/rightfoot.png")}
            animation={this.state.danceGo ? { name: "danceRight", run: true, loop: this.state.loop }
              : { name: 'beginning', run: true }}
          />
          <ViroImage
            height={0.5}
            width={0.2}
            rotation={[-90, 0, 0]}
            position={[-(selectedStance / 2), -2, 0]}
            // position={[-.2, -2, 0]}
            source={require("./res/leftfoot.png")}
            animation={this.state.danceGo ? { name: "danceLeft", run: true, loop: this.state.loop }
              : { name: 'beginning', run: true }}
          />
        </ViroARScene>
      );
    }
  }
}


module.exports = HelloWorldSceneAR;
