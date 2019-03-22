import React from 'react'
import Routes from './js/Routes'
import {ViroARSceneNavigator} from 'react-viro'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'
require('./secrets')
var InitialARScene = require('./js/World3dSceneAR')

export default class App extends React.Component {
  constructor() {
    super()

    this.state={
      inViro: false
    }

    this.enterViro = this.enterViro.bind(this)
    this.exitViro = this.exitViro.bind(this)
  }

  enterViro() {
    this.setState({inViro: true})
  }

  exitViro() {
    this.setState({inViro: false})
  }

  render() {
    // if (this.state.inViro) {
      return (
        <View style={localStyles.outer}>
          <ViroARSceneNavigator
            apiKey={process.env.VIRO_API}
            initialScene={{scene: InitialARScene}}
            // enableBloom={true}
          />

          <View style={{position: 'absolute', left: 0, right: 0, bottom: 37, alignItems: 'center'}}>
            <TouchableHighlight
              style={localStyles.buttons}
              onPress={this.exitViro}
              underlayColor={'#000000'} >
              <Text style={localStyles.buttonText}>Exit</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    // } else {
    //   return (
    //     <View style={localStyles.outer}>
    //       <View style={localStyles.inner}>

    //         <Text style={localStyles.titleText}>
    //           Ready to DANCE?
    //         </Text>

    //         <TouchableHighlight style={localStyles.buttons}
    //           onPress={this.enterViro}
    //           underlayColor={'#68a0ff'}>

    //           <Text style={localStyles.buttonText}>Jump In</Text>

    //         </TouchableHighlight>

    //       </View>
    //     </View>
    //   )
    // }
  }
}

const localStyles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  }
})