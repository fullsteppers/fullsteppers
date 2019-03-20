import React, {Component} from 'react'
import {StyleSheet} from 'react-native'

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
    }
  }

  render () {
    return (
      <ViroARScene anchorDetectionTypes={'PlanesHorizontal'}>
        <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1}/>
        <ViroNode position={[0,-1.75,-4]}>

          {/* Represents the ground */}
          <ViroQuad
            position={[0,-1.5,1]}
            rotation={[-90,0,0]}
            scale={[5,8,2]}
            arShadowReceiver={true}
            lightReceivingBitMask={2}
            opacity={.05}
            materials={'quad'}
          />

          {/* RIGHT SHOE */}
          <ViroNode
            position={[-.33,-1.5,-.75]}
            animation={{
              name: 'runningMan',
              run: true,
              loop: true,
            }}
          >

            <ViroSpotLight
              color={'#FFFFFF'}
              position={[0,3,0]}
              direction={[0,-1,0]}
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
              materials={'rightShoe'}
              type="OBJ"
              scale={[.036,.036,.036]}
              opacity={.3}
              lightReceivingBitMask={3}
              shadowCastingBitMask={2}
              animation={{
                name: 'runningMan',
                run: true,
                loop: true,
              }}
            />

            {/* <ViroQuad
              rotation={[-90,0,0]}
              width={.25} height={.25}
              arShadowReceiver={true}
              lightReceivingBitMask={2}
            /> */}
          </ViroNode>

          {/* LEFT SHOE */}
          <ViroNode
            position={[.33,-1.5,-.75]}
            animation={{
              name: 'runningManB',
              run: true,
              loop: true,
            }}
          >

            <ViroSpotLight
              color={'#FFFFFF'}
              position={[0,3,0]}
              direction={[0,-1,0]}
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
              materials={'leftShoe'}
              type="OBJ"
              scale={[.036,.036,.036]}
              opacity={.3}
              lightReceivingBitMask={3}
              shadowCastingBitMask={2}
              animation={{
                name: 'runningManB',
                run: true,
                loop: true,
              }}
            />

            {/* <ViroQuad
              rotation={[-90,0,0]}
              width={.25} height={.25}
              arShadowReceiver={true}
              lightReceivingBitMask={2}
            /> */}
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
    diffuseColor: '#9900EE',
    diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseIntensity: .75,
    bloomThreshold: .1,
    blendMode: 'Add',
    lightingModel: 'PBR',
    metalness: 9
  },
  leftShoe: {
    diffuseColor: '#00EEEE',
    diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseIntensity: .75,
    bloomThreshold: .1,
    blendMode: 'Add',
    lightingModel: 'PBR',
    metalness: 9
  }
})

ViroAnimations.registerAnimations({
  // QUARTER-NOTE FULL-MOTIONS
  nodeOriginZ: {properties: {positionZ: -.75}},
  nodeOriginXL: {properties: {positionX: .33}},
  nodeOriginXR: {properties: {positionX: -.33}},
  nodePause4n: {properties: {positionZ: '+=0'}, duration: 500},
  nodeForward4n: {properties: {positionZ: '+=0.8'}, duration: 500, easing: "EaseIn"},
  nodeBackward4n: {properties: {positionZ: '-=0.8'}, duration: 500, easing: "EaseIn"},
  nodeLeft4n: {properties: {positionX: '+=0.8'}, duration: 500, easing: "EaseIn"},
  nodeRight4n: {properties: {positionX: '-=0.8'}, duration: 500, easing: "EaseIn"},
  nodeFL4n: {properties: {}, duration: 500},
  nodeFR4n: {properties: {}, duration: 500},
  nodeBL4n: {properties: {}, duration: 500},
  nodeBR4n: {properties: {}, duration: 500},
  // nodeRotateLeft: {properties: {}, duration: 0}, // Potentially? Maybe on the 3DObject?
  // nodeRotateRight: {properties: {}, duration: 0}, // Potentially? Maybe on the 3DObject?

  // EIGHTH-NOTE HALF-MOTIONS
  nodePause8n: {properties: {positionZ: '+=0'}, duration: 250},
  nodeForward8n: {properties: {positionZ: '+=0.4'}, duration: 250, easing: "EaseIn"},
  nodeBackward8n: {properties: {positionZ: '-=0.4'}, duration: 250, easing: "EaseIn"},
  nodeLeft8n: {properties: {positionX: '+=0.4'}, duration: 250, easing: "EaseIn"},
  nodeRight8n: {properties: {positionX: '-=0.4'}, duration: 250, easing: "EaseIn"},
  nodeFL8n: {properties: {}, duration: 250},
  nodeFR8n: {properties: {}, duration: 250},
  nodeBL8n: {properties: {}, duration: 250},
  nodeBR8n: {properties: {}, duration: 250},

  // EIGHTH-NOTE FOOT-GESTURES
  shoePause: {properties: {positionY: '+=0'}, duration: 250},
  shoeUpFlat: {properties: {positionY: -.8, rotateX: '+=0'}, duration: 250, easing: "EaseOut"},
  shoeUpToe: {properties: {positionY: -.8, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
  shoeUpToeFlat: {properties: {positionY: -.8, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
  shoeUpToeHeel: {properties: {positionY: -.8, rotateX: '-=60'}, duration: 250, easing: "EaseOut"},
  shoeUpHeel: {properties: {positionY: -.8, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
  shoeUpHeelFlat: {properties: {positionY: -.8, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
  shoeUpHeelToe: {properties: {positionY: -.8, rotateX: '+=60'}, duration: 250, easing: "EaseOut"},
  shoeDownFlat: {properties: {positionY: -1.5, rotateX: '+=0'}, duration: 250, easing: "EaseOut"},
  shoeDownToe: {properties: {positionY: -1.3, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
  shoeDownToeFlat: {properties: {positionY: -1.5, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
  shoeDownToeHeel: {properties: {positionY: -1.5, rotateX: '-=60'}, duration: 250, easing: "EaseOut"},
  shoeDownHeel: {properties: {positionY: -1.3, rotateX: '-=30'}, duration: 250, easing: "EaseOut"},
  shoeDownHeelFlat: {properties: {positionY: -1.5, rotateX: '+=30'}, duration: 250, easing: "EaseOut"},
  shoeDownHeelToe: {properties: {positionY: -1.3, rotateX: '+=60'}, duration: 250, easing: "EaseOut"},

  // MARCH
  marchFB: [
    ['nodeForward4n','nodePause4n','nodeBackward4n','nodePause4n'],
    ['shoeUpHeel','shoeDownHeelFlat','shoePause','shoePause','shoeUpToe','shoeDownToeFlat','shoePause','shoePause']
  ],
  marchPauseFB: [
    ['nodePause4n','nodeForward4n','nodePause4n','nodeBackward4n'],
    ['shoePause','shoePause','shoeUpHeel','shoeDownHeelFlat','shoePause','shoePause','shoeUpToe','shoeDownToeFlat']
  ],

  // SIDE STEP
  sideStepRL: [
    ['nodeRight4n','nodePause4n','nodePause4n','nodeLeft4n'],
    ['shoeUpToe','shoeDownToeFlat','shoePause','shoePause','shoePause','shoePause','shoeUpToe','shoeDownToeFlat']
  ],
  sideStepPauseRL: [
    ['nodePause4n','nodeRight4n','nodeLeft4n','nodePause4n'],
    ['shoePause','shoePause','shoeUpToe','shoeDownToeFlat','shoeUpToe','shoeDownToeFlat','shoePause','shoePause']
  ],

  // RUNNING MAN
  runningMan: [
    ['nodeForward8n','nodeBackward8n','nodeBackward8n','nodeForward8n'],
    ['shoeDownHeel','shoeDownHeelFlat','shoeDownToe','shoeUpToeFlat']
  ],
  runningManB: [
    ['nodeBackward8n','nodeForward8n','nodeForward8n','nodeBackward8n'],
    ['shoeDownToe','shoeUpToeFlat','shoeDownHeel','shoeDownHeelFlat']
  ]
})

module.exports = World3dSceneAR