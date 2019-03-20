import React from 'react'
import Routes from './js/Routes'
import {ViroARSceneNavigator} from 'react-viro'
require('./secrets')
var InitialARScene = require('./js/World3dSceneAR')

export default class App extends React.Component {
  render() {
    return (
      <ViroARSceneNavigator
        apiKey={process.env.VIRO_API}
        initialScene={{scene: InitialARScene}}
        enableBloom={true}
      />
    )
  }
}
