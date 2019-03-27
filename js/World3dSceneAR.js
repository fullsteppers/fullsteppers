import React, {Component} from 'react'
import {
  ViroARScene,
  ViroARPlane,
  ViroAmbientLight,
  ViroCamera,
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

    this._onAnchorFound = this._onAnchorFound.bind(this)
  }

  _onAnchorFound () {
    this.arPlaneRef.setNativeProps({'pauseUpdates':true})
  }

  render () {
    return (
      <ViroARScene anchorDetectionTypes={'PlanesHorizontal'} >
        <ViroAmbientLight color={'#aaaaaa'}/>
        {/* <ViroARPlane key={'firstPlane'}
          minHeight={.5} minWidth={.5} alignment={'Horizontal'}
          ref={(component) => {this.arPlaneRef = component}}
          onAnchorFound={this._onAnchorFound} > */}

        {/* <ViroCamera active={true} position={[0,1,2]} /> */}
        {/* <ViroNode position={[0,-1.6,-2]} > */}

        {/* Represents the ground */}
          <ViroQuad
            position={[0,-2,-2]}
            rotation={[-90,0,0]}
            scale={[5,8,0]}
            arShadowReceiver={true}
            lightReceivingBitMask={2}
            opacity={.05}
            materials={'quad'} />

        {/* RIGHT SHOE */}
          <ViroNode
            scale={[1,1,1]}
            position={[-.15,-1.5,-1.5]}
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
              // resources={[require('./res/converse3d/converse_obj.mtl')]}
              materials={'rightShoe'}
              type="OBJ"
              scale={[.012,.012,.012]}
              opacity={.85}
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
            scale={[1,1,1]}
            position={[.15,-1.5,-1.5]}
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
              // resources={[require('./res/converse3d/converse_obj.mtl')]}
              materials={'leftShoe'}
              type="OBJ"
              scale={[.012,.012,.012]}
              opacity={.85}
              lightReceivingBitMask={2}
              shadowCastingBitMask={2}
              // animation={{
              //   name: 'ft3dB',
              //   run: this.props.arSceneNavigator.viroAppProps.playback,
              //   loop: true,}}
             />

          </ViroNode>

        {/* USER RIGHT FOOT */}
          <ViroNode
            scale={[1,1,1]}
            position={[.2,-1.5,-.5]}>

            <ViroImage
              source={require('./res/rightfoot.png')}
              height={0.5} width={0.2}
              scale={[.5,.5,.5]}
              rotation={[-90,0,0]}
              animation={{
                name: 'wB',
                run: this.props.arSceneNavigator.viroAppProps.playback,
                loop: true
              }} />

          </ViroNode>

        {/* USER LEFT FOOT */}
          <ViroNode
            scale={[1,1,1]}
            position={[-.2,-1.5,-.5]}>

            <ViroImage
              source={require('./res/leftfoot.png')}
              height={0.5} width={0.2}
              scale={[.5,.5,.5]}
              rotation={[-90,0,0]}
              animation={{
                name: 'w',
                run: this.props.arSceneNavigator.viroAppProps.playback,
                loop: true
              }} />

          </ViroNode>

        {/* </ViroNode> */}
        {/* </ViroARPlane> */}
      </ViroARScene>
    )
  }
}

ViroMaterials.createMaterials({
  quad: {
    diffuseColor: '#111111'
  },
  rightShoe: {
    // diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseColor: '#F0F000',
    diffuseIntensity: .3,
    blendMode: 'Add',
  },
  leftShoe: {
    // diffuseTexture: require('./res/converse3d/converse_obj.mtl'),
    diffuseColor: '#00E0DD',
    diffuseIntensity: .3,
    blendMode: 'Add',
  }
})

ViroAnimations.registerAnimations(require('./DescriptiveAnimations'))

module.exports = World3dSceneAR
