import React, {Component} from 'react'
import {
  ViroARScene,
  ViroAmbientLight,
  ViroQuad,
  ViroSpotLight,
  ViroNode,
  ViroImage,
  Viro3DObject,
  ViroMaterials,
  ViroAnimations
} from 'react-viro'

export default class World3dSceneAR extends Component {
  constructor () {
    super ()

    this.state = {
      tempo: 120,
      playback: true
    }

    const quarterNote = (60000 / this.state.tempo)
    const eighthNote = quarterNote / 2

    this.togglePlayback = this.togglePlayback.bind(this)
  }

  togglePlayback () {
    this.setState(prevState => ({playback: !prevState.playback}))
  }

  render () {
    return (
      <ViroARScene anchorDetectionTypes={'PlanesHorizontal'}>
        <ViroAmbientLight color={'#aaaaaa'}/>
        <ViroNode position={[0,-1.75,-4]} >

            {/* Represents the ground */}
          <ViroQuad
            position={[0,-3.2,1]}
            rotation={[-90,0,0]}
            scale={[5,8,2]}
            arShadowReceiver={true}
            lightReceivingBitMask={2}
            opacity={.05}
            materials={'quad'} />

            {/* RIGHT SHOE */}
          <ViroNode
            // ref={component => {this.animationRef = component}}
            position={[-.33,-1.5,-.75]}
            animation={{
              name: 'foxTrot',
              run: this.state.playback,
              loop: true,
            }} >
            
            <ViroSpotLight
              color={'#FFFFFF'}
              position={[0,3,0]}
              direction={[0,-1,0]}
              castsShadow={true}
              influenceBitMask={2}
              shadowNearZ={2}
              shadowFarZ={5}
              shadowOpacity={.7} />

            <Viro3DObject
              // ref={component => {this.animationRef = component}}
              source={require('./res/converse3d/Right_shoe.obj')}
              resources={[require('./res/converse3d/converse_obj.mtl')]}
              materials={'rightShoe'}
              type="OBJ"
              scale={[.036,.036,.036]}
              opacity={.4}
              lightReceivingBitMask={2}
              shadowCastingBitMask={2}
              animation={{
                name: 'foxTrot',
                run: this.state.playback,
                loop: true,
              }} />

            {/* <ViroQuad
              rotation={[-90,0,0]}
              position={[0,-.001,0]}
              width={1.5} height={1.5}
              arShadowReceiver={true}
              lightReceivingBitMask={2} /> */}
          </ViroNode>

            {/* LEFT SHOE */}
          <ViroNode
            // ref={component => {this.animationRef = component}}
            position={[.33,-1.5,-.75]}
            animation={{
              name: 'foxTrotB',
              run: this.state.playback,
              loop: true,
            }} >

            <ViroSpotLight
              color={'#FFFFFF'}
              position={[0,3,0]}
              direction={[0,-1,0]}
              castsShadow={true}
              influenceBitMask={2}
              shadowNearZ={2}
              shadowFarZ={5}
              shadowOpacity={.7} />

            <Viro3DObject
              // ref={component => {this.animationRef = component}}
              source={require('./res/converse3d/Left_shoe.obj')}
              resources={[require('./res/converse3d/converse_obj.mtl'),
                          require('./res/converse3d/converse_bump.jpg')]}
              materials={'leftShoe'}
              type="OBJ"
              scale={[.036,.036,.036]}
              opacity={.4}
              lightReceivingBitMask={2}
              shadowCastingBitMask={2}
              animation={{
                name: 'foxTrotB',
                run: this.state.playback,
                loop: true,
              }} />

            {/* <ViroQuad
              rotation={[-90,0,0]}
              position={[0,-.001,0]}
              width={1.5} height={1.5}
              arShadowReceiver={true}
              lightReceivingBitMask={2} /> */}
          </ViroNode>

            {/* USER RIGHT FOOT */}
          <ViroNode position={[.33,-1,2.5]}>
            <ViroImage
              // ref={component => {this.animationRef = component}}
              source={require('./res/rightfoot.png')}
              height={0.5} width={0.2}
              rotation={[-90,0,0]}
              animation={{
                name: 'foxTrotB',
                run: this.state.playback,
                loop: true
              }} />
          </ViroNode>

            {/* USER LEFT FOOT */}
          <ViroNode position={[-.33,-1,2.5]}>
            <ViroImage
              // ref={component => {this.animationRef = component}}
              source={require('./res/leftfoot.png')}
              height={0.5} width={0.2}
              rotation={[-90,0,0]}
              animation={{
                name: 'foxTrot',
                run: this.state.playback,
                loop: true
              }} />
          </ViroNode>

        </ViroNode>
      </ViroARScene>
    )
  }
}

ViroMaterials.createMaterials({
  quad: {
    diffuseColor: '#111111'
  },
  rightShoe: {
    diffuseColor: '#F0F000',
    diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseIntensity: .75,
    // bloomThreshold: .25,
    blendMode: 'Add',
    // lightingModel: 'PBR',
    // metalness: 9
  },
  leftShoe: {
    diffuseColor: '#00E0E0',
    diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseIntensity: .75,
    // bloomThreshold: .25,
    blendMode: 'Add',
    // lightingModel: 'PBR',
    // metalness: 9
  }
})

ViroAnimations.registerAnimations(require('./Animations'))

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

module.exports = World3dSceneAR