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
  ViroButton,
  ViroAmbientLight,
  ViroMaterials,
  Viro3DObject, ViroNode,
  ViroQuad,
  ViroSpotLight
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
      showShoes: true
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
    if (dance.custom) {
      this.setState({ showShoes: false })
    }
    await ViroSound.preloadSounds({ "song": songObj.audioUrl })
    await ViroAnimations.registerAnimations(dance.dance)
    this.setState({ go: true }) // means song and dance are queued
    // timer.setTimeout('startDance', () => {
    //   this.setState({ danceGo: true })
    // }, 3000);
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
        <ViroARScene onClick={this.changePause} anchorDetectionTypes={'PlanesHorizontal'}>


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

          <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
          {this.state.buttonOn ? <ViroText text='' /> :
            <ViroNode position={[0, -2, -2]}>

              {/* Represents the ground */}
              <ViroQuad
                position={[0, -2, 1]}
                rotation={[-90, 0, 0]}
                scale={[2, 2, 2]}
                arShadowReceiver={true}
                lightReceivingBitMask={2}
                opacity={.05}
                materials={'quad'}
              />

              {/* RIGHT SHOE */}
              {this.state.showShoes ? <ViroNode
                position={[-(selectedStance / 2), -2, -.75]}
                animation={this.state.danceGo ? {
                  name: '3dDanceRight',
                  run: this.state.run,
                  loop: true,
                } : { name: 'beginning', run: true }}
              >

                <ViroSpotLight
                  color={'#FFFFFF'}
                  position={[0, 3, 0]}
                  direction={[0, -1, 0]}
                  castsShadow={true}
                  influenceBitMask={2}
                  shadowMapSize={2048}
                  shadowNearZ={2}
                  shadowFarZ={5}
                  shadowOpacity={.7}
                />

                <Viro3DObject
                  source={require('./res/converse3d/Right_shoe.obj')}
                  resources={[require('./res/converse3d/converse_obj.mtl')]}
                  type="OBJ"
                  scale={[.036, .036, .036]}
                  materials={'rightShoe'}
                  opacity={.75}
                  lightReceivingBitMask={3}
                  shadowCastingBitMask={2}
                />

              </ViroNode> : <ViroText text='' />}

              {/* LEFT SHOE */}
              {this.state.showShoes ? <ViroNode
                position={[(selectedStance / 2), -2, -.75]}
                animation={this.state.danceGo ? {
                  name: '3dDanceLeft',
                  run: this.state.run,
                  loop: true,
                } : { name: 'beginning', run: true }}
              >

                <ViroSpotLight
                  color={'#FFFFFF'}
                  position={[0, 3, 0]}
                  direction={[0, -1, 0]}
                  castsShadow={true}
                  influenceBitMask={2}
                  shadowMapSize={2048}
                  shadowNearZ={2}
                  shadowFarZ={5}
                  shadowOpacity={.7}
                />

                <Viro3DObject
                  source={require('./res/converse3d/Left_shoe.obj')}
                  resources={[require('./res/converse3d/converse_obj.mtl'),
                  require('./res/converse3d/converse_bump.jpg')]}
                  type="OBJ"
                  scale={[.036, .036, .036]}
                  opacity={.75}
                  materials={'leftShoe'}
                  lightReceivingBitMask={3}
                  shadowCastingBitMask={2}
                />

              </ViroNode> : <ViroText text='' />}

            </ViroNode>}
        </ViroARScene>
      );
    }
  }
}

ViroMaterials.createMaterials({
  quad: {
    diffuseColor: '#111111'
  },
  rightShoe: {
    diffuseColor: '#F0F000',
    // diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseIntensity: .3,
    blendMode: 'Add',
  },
  leftShoe: {
    diffuseColor: '#00E0DD',
    // diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseIntensity: .3,
    blendMode: 'Add',
  }
})


module.exports = HelloWorldSceneAR;
