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
  constructor (props) {
    super (props)

    this.state = {
      tempo: 120,
      playback: this.props.arSceneNavigator.viroAppProps.playback
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
            position={[-.33,-1.5,-.75]}
            animation={{
              name: 'w3d',
              run: this.props.arSceneNavigator.viroAppProps.playback,
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
              source={require('./res/converse3d/Right_shoe.obj')}
              resources={[require('./res/converse3d/converse_obj.mtl')]}
              materials={'rightShoe'}
              type="OBJ"
              scale={[.036,.036,.036]}
              opacity={.5}
              lightReceivingBitMask={2}
              shadowCastingBitMask={2}
              // animation={{
              //   name: 'ft3d',
              //   run: this.props.arSceneNavigator.viroAppProps.playback,
              //   loop: true,}}
             />

          </ViroNode>

            {/* LEFT SHOE */}
          <ViroNode
            position={[.33,-1.5,-.75]}
            animation={{
              name: 'w3dB',
              run: this.props.arSceneNavigator.viroAppProps.playback,
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
              source={require('./res/converse3d/Left_shoe.obj')}
              resources={[require('./res/converse3d/converse_obj.mtl'),
                          require('./res/converse3d/converse_bump.jpg')]}
              materials={'leftShoe'}
              type="OBJ"
              scale={[.036,.036,.036]}
              opacity={.5}
              lightReceivingBitMask={2}
              shadowCastingBitMask={2}
              // animation={{
              //   name: 'ft3dB',
              //   run: this.props.arSceneNavigator.viroAppProps.playback,
              //   loop: true,}}
             />

          </ViroNode>

            {/* USER RIGHT FOOT */}
          <ViroNode position={[.33,-1,2.5]}>
            <ViroImage
              source={require('./res/rightfoot.png')}
              height={0.5} width={0.2}
              // scale={[0,0,0]}
              rotation={[-90,0,0]}
              animation={{
                name: 'wB',
                run: this.props.arSceneNavigator.viroAppProps.playback,
                loop: true
              }} />
          </ViroNode>

            {/* USER LEFT FOOT */}
          <ViroNode position={[-.33,-1,2.5]}>
            <ViroImage
              source={require('./res/leftfoot.png')}
              height={0.5} width={0.2}
              // scale={[0,0,0]}
              rotation={[-90,0,0]}
              animation={{
                name: 'w',
                run: this.props.arSceneNavigator.viroAppProps.playback,
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
    blendMode: 'Add',
  },
  leftShoe: {
    diffuseColor: '#00E0E0',
    diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseIntensity: .75,
    blendMode: 'Add',
  }
})

ViroAnimations.registerAnimations(require('./DescriptiveAnimations'))

module.exports = World3dSceneAR
