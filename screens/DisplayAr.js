import React from 'react'
import { VIRO_API } from './../secrets'
import { ViroARSceneNavigator} from 'react-viro'
var InitialARScene = require("./../js/HelloWorldSceneAR");

export default class DisplayAr extends React.Component {
  render() {
    const { dance, song } = this.props
    return (
      <ViroARSceneNavigator
        apiKey={VIRO_API}
        initialScene={{ scene: InitialARScene }}
        viroAppProps={{dance, song}}
      />
    )
  }
}
