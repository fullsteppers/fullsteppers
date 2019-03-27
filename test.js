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
      inViro: false,
      viroAppProps: {
        playback: false
      }
    }

    this.togglePlayback = this.togglePlayback.bind(this)
    this.enterViro = this.enterViro.bind(this)
    this.exitViro = this.exitViro.bind(this)
  }

  togglePlayback () {
    this.setState(prevState => ({viroAppProps: {playback: !prevState.viroAppProps.playback}}))
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
            viroAppProps={this.state.viroAppProps}
            // enableBloom={true}
          />

          <View style={{position: 'absolute', left: 0, right: 0, bottom: 37, alignItems: 'center'}}>
            <TouchableHighlight
              style={localStyles.buttons}
              onPress={this.togglePlayback}
              underlayColor={'#000000'} >
              <Text style={localStyles.buttonText}>Play/Pause</Text>
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

// ViroAnimations.registerAnimations({
//   // ----------OPACITY----------

//   opaque8n: {properties: {opacity: 1}, duration: 250, easing: "EaseOut"},
//   translucent8n: {properties: {opacity: 0.25}, duration: 250, easing: "EaseOut"},

//   // ----------BASIC MOVEMENTS----------

//   // QUARTER-NOTE FULL-MOTIONS
//   nodeOriginZ: {properties: {positionZ: -.75}},
//   nodeOriginXL: {properties: {positionX: .33}},
//   nodeOriginXR: {properties: {positionX: -.33}},
//   nodePause4n: {properties: {}, duration: 500},
//   nodeForward4n: {properties: {positionZ: '+=0.8'}, duration: 500, easing: "EaseOut"},
//   nodeBackward4n: {properties: {positionZ: '-=0.8'}, duration: 500, easing: "EaseOut"},
//   nodeLeft4n: {properties: {positionX: '+=0.8'}, duration: 500, easing: "EaseOut"},
//   nodeRight4n: {properties: {positionX: '-=0.8'}, duration: 500, easing: "EaseOut"},
//   nodeFL4n: {properties: {}, duration: 500},
//   nodeFR4n: {properties: {}, duration: 500},
//   nodeBL4n: {properties: {}, duration: 500},
//   nodeBR4n: {properties: {}, duration: 500},
//   // nodeRotateLeft: {properties: {}, duration: 0}, // Potentially? Maybe on the 3DObject?
//   // nodeRotateRight: {properties: {}, duration: 0}, // Potentially? Maybe on the 3DObject?

//   // EIGHTH-NOTE HALF-MOTIONS
//   nodePause8n: {properties: {positionZ: '+=0'}, duration: 250},
//   nodeForward8n: {properties: {positionZ: '+=0.4'}, duration: 250, easing: "EaseOut"},
//   nodeBackward8n: {properties: {positionZ: '-=0.4'}, duration: 250, easing: "EaseOut"},
//   nodeLeft8n: {properties: {positionX: '+=0.4'}, duration: 250, easing: "EaseOut"},
//   nodeRight8n: {properties: {positionX: '-=0.4'}, duration: 250, easing: "EaseOut"},
//   nodeFL8n: {properties: {}, duration: 250},
//   nodeFR8n: {properties: {}, duration: 250},
//   nodeBL8n: {properties: {}, duration: 250},
//   nodeBR8n: {properties: {}, duration: 250},

//   // EIGHTH-NOTE FOOT-GESTURES
//   shoePause: {properties: {positionY: '+=0'}, duration: 250},
//   shoeUpFlat: {properties: {positionY: -.8, rotateX: '+=0'}, duration: 250, easing: "EaseOut"},
//   shoeUpToe: {properties: {positionY: -.8, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
//   shoeUpToeFlat: {properties: {positionY: -.8, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
//   shoeUpToeHeel: {properties: {positionY: -.8, rotateX: '-=60'}, duration: 250, easing: "EaseOut"},
//   shoeUpHeel: {properties: {positionY: -.8, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
//   shoeUpHeelFlat: {properties: {positionY: -.8, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
//   shoeUpHeelToe: {properties: {positionY: -.8, rotateX: '+=60'}, duration: 250, easing: "EaseOut"},
//   shoeDownFlat: {properties: {positionY: -1.5, rotateX: '+=0'}, duration: 250, easing: "EaseOut"},
//   shoeDownToe: {properties: {positionY: -1.3, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
//   shoeDownToeFlat: {properties: {positionY: -1.5, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
//   shoeDownToeHeel: {properties: {positionY: -1.5, rotateX: '-=60'}, duration: 250, easing: "EaseOut"},
//   shoeDownHeel: {properties: {positionY: -1.3, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
//   shoeDownHeelFlat: {properties: {positionY: -1.5, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
//   shoeDownHeelToe: {properties: {positionY: -1.3, rotateX: '+=60'}, duration: 250, easing: "EaseOut"},

//   // ----------ROUTINES----------

//   // SALSA, LEFT LEG LEAD
//   salsaL: [
//     ['nodeBackward4n','nodeForward4n','nodePause4n','nodePause4n'],
//     ['shoeUpToe','shoeDownToeFlat','shoeUpToe','shoeDownToeFlat','shoePause','shoePause','shoePause','shoePause']
//   ],
//   salsaR: [
//     ['nodePause4n','nodePause4n','nodeForward4n','nodeBackward4n'],
//     ['shoePause','shoePause','shoePause','shoePause','shoeUpHeel','shoeDownHeelFlat','shoeUpToe','shoeDownToeFlat']
//   ],

//   // ----------TESTBED ROUTINES----------

//   // MARCH, FORWARD TO BACKWARD
//   marchFB: [
//     ['nodeForward4n','nodePause4n','nodeBackward4n','nodePause4n'],
//     ['shoeUpHeel','shoeDownHeelFlat','shoePause','shoePause','shoeUpToe','shoeDownToeFlat','shoePause','shoePause']
//   ],
//   marchPauseFB: [
//     ['nodePause4n','nodeForward4n','nodePause4n','nodeBackward4n'],
//     ['shoePause','shoePause','shoeUpHeel','shoeDownHeelFlat','shoePause','shoePause','shoeUpToe','shoeDownToeFlat']
//   ],

//   // SIDE STEP, RIGHT TO LEFT
//   sideStepRL: [
//     ['nodeRight4n','nodePause4n','nodePause4n','nodeLeft4n'],
//     ['opaque8n','translucent8n','translucent8n','translucent8n','translucent8n','translucent8n','opaque8n','translucent8n'],
//     ['shoeUpToe','shoeDownToeFlat','shoePause','shoePause','shoePause','shoePause','shoeUpToe','shoeDownToeFlat'],
//   ],
//   sideStepPauseRL: [
//     ['nodePause4n','nodeRight4n','nodeLeft4n','nodePause4n'],
//     ['translucent8n','translucent8n','opaque8n','translucent8n','opaque8n','translucent8n','translucent8n','translucent8n'],
//     ['shoePause','shoePause','shoeUpToe','shoeDownToeFlat','shoeUpToe','shoeDownToeFlat','shoePause','shoePause'],
//   ],

//   // RUNNING MAN
//   runningMan: [
//     ['nodeForward8n','nodeBackward8n','nodeBackward8n','nodeForward8n'],
//     ['translucent8n','opaque8n','translucent8n','opaque8n'],
//     ['shoeDownHeel','shoeDownHeelFlat','shoeDownToe','shoeUpToeFlat'],
//   ],
//   runningManB: [
//     ['nodeBackward8n','nodeForward8n','nodeForward8n','nodeBackward8n'],
//     ['translucent8n','opaque8n','translucent8n','opaque8n'],
//     ['shoeDownToe','shoeUpToeFlat','shoeDownHeel','shoeDownHeelFlat'],
//   ],
// })