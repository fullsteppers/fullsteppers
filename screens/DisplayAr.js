import React from 'react'
import { ViroARSceneNavigator} from 'react-viro'
var InitialARScene = require("./../js/HelloWorldSceneAR");

export default class DisplayAr extends React.Component {
  render() {
    const { dance, song } = this.props
    return (
      <ViroARSceneNavigator
        apiKey="629A9C94-12FB-4AE8-8ACF-BEF10AAF6CEB"
        initialScene={{ scene: InitialARScene }}
        viroAppProps={{dance, song}}
      />
    )
  }
}
