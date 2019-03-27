"use strict";

import React, { Component } from "react";
import timer from 'react-native-timer'
import moves from './dances'
import song from './songs'
import { Actions } from 'react-native-router-flux'
import { Toast } from 'native-base'

import {
  ViroARScene,
  ViroText,
  ViroImage,
  ViroSound,
  ViroAnimations,
  ViroButton
} from "react-viro";

import { View, TouchableHighlight } from 'react-native'

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    this.state = {
      go: false,
      ready: false,
      buttonOn: true,
      danceGo: false,
      loop: true,
      run: true,
    };
    this.onButtonTap = this.onButtonTap.bind(this)
    this.changePause = this.changePause.bind(this)
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
  }

  onButtonTap() {
    this.setState({ ready: true, buttonOn: false });
    timer.setTimeout('startDance', () => {
      this.setState({ danceGo: true })
    }, 3000);

    Toast.show({
      text: "Tap the screen to pause",
      type: 'danger',
      position: 'bottom',
      duration: 2000
    })

  }

  changePause() {
    const run = !this.state.run
    this.setState({ run })
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
        <ViroARScene onClick={this.changePause}>

          {this.state.go && this.state.buttonOn ? <ViroButton
            source={require("./res/start.png")}
            rotation={[-90, 0, 0]}
            position={[0, -2, 0]}
            height={.3}
            width={.3}
            onClick={this.onButtonTap}
          /> : <ViroText text='' />}

          {this.state.ready ? <ViroSound
            source="song"
            paused={!this.state.run}
            muted={false}
            loop={false}
            volume={1.0}
          /> : <ViroText text='' />}

          {this.state.buttonOn ? <ViroText text='' />
            : <ViroImage
              height={0.5}
              width={0.2}
              rotation={[-90, 0, 0]}
              run={this.state.run}
              position={[(selectedStance / 2), -2, 0]}
              source={require("./res/rightfoot.png")}
              animation={this.state.danceGo ? { name: "danceRight", run: this.state.run, loop: this.state.loop }
                : { name: 'beginning', run: true }}
            />}
          {this.state.buttonOn ? <ViroText text='' />
            : <ViroImage
              height={0.5}
              width={0.2}
              rotation={[-90, 0, 0]}
              run={this.state.run}
              position={[-(selectedStance / 2), -2, 0]}
              source={require("./res/leftfoot.png")}
              animation={this.state.danceGo ? { name: "danceLeft", run: this.state.run, loop: this.state.loop }
                : { name: 'beginning', run: true }}
            />}
        </ViroARScene>
      );
    }
  }
}


module.exports = HelloWorldSceneAR;
