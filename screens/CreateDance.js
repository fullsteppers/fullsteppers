import React from 'react'
import {  View, Text, Image, Animated, TouchableHighlight } from 'react-native'
import Arrow from 'react-native-arrow'

export default class createDance extends React.Component {
  constructor() {
    super()
    this.state = {
      leftX: 100,
      leftY: 170,
      rightX: 145,
      rightY: 170,
      currentFoot: 'right'
    }
    this.moveAnimationLeft = new Animated.ValueXY({ x: this.state.leftX, y: this.state.leftY })
    this.moveAnimationRight = new Animated.ValueXY({ x: this.state.rightX, y: this.state.rightY })
    this.move = this.move.bind(this)
  }

  move(x, y){
    let newX = this.state.rightX
    let newY = this.state.rightY
    if(y === 'forward'){
      newY -= 100
      this.setState({[`${this.state.currentFoot}Y`]: newY})
     } else if (y === 'backward') {
      newY += 100
      this.setState({[`${this.state.currentFoot}Y`]: newY})
     }
     if(x === 'right') {
      newX += 60
      this.setState({[`${this.state.currentFoot}X`]: newX})
     } else if(x === 'left') {
      newX -= 60
      this.setState({[`${this.state.currentFoot}X`]: newX})
     }

    Animated.spring(this.moveAnimationRight, {
      toValue: { x: newX, y: newY},
    }).start()
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection:'column'}}>
        <View style={{flex: 1, flexDirection:'row'}}>
          <Animated.View style={[this.moveAnimationLeft.getLayout()]}>
            <Image
            source={require('./../js/res/leftfoot.png')}
            style={{width: 66, height: 160}}/>
          </Animated.View>
          <Animated.View style={[this.moveAnimationRight.getLayout()]}>
            <Image
            source={require('./../js/res/rightfoot.png')}
            style={{width: 66, height: 160}}/>
          </Animated.View>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View>
            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('left', 'forward')}>
              <Image
              source={require('./../js/res/back_arrow.png')}
              style={{width: 15, height: 15, transform: [{ rotate: '45deg'}]}}/>
            </TouchableHighlight>

            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('stay', 'forward')}>
              <Image
              source={require('./../js/res/back_arrow.png')}
              style={{width: 15, height: 15, transform: [{ rotate: '90deg'}]}}/>
            </TouchableHighlight>

            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('right', 'forward')}>
              <Image
              source={require('./../js/res/back_arrow.png')}
              style={{width: 15, height: 15, transform: [{ rotate: '135deg'}]}}/>
            </TouchableHighlight>
          </View>

            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('left', 'stay')}>
            <Image
            source={require('./../js/res/back_arrow.png')}
            style={{width: 15, height: 15}}/>
            </TouchableHighlight>


            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('right', 'stay')}>
              <Image
              source={require('./../js/res/back_arrow.png')}
              style={{width: 15, height: 15, transform: [{ rotate: '180deg'}]}}/>
            </TouchableHighlight>

            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('stay', 'backward')}>
              <Image
              source={require('./../js/res/back_arrow.png')}
              style={{width: 15, height: 15, transform: [{ rotate: '270deg'}]}}/>
            </TouchableHighlight>


            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('right', 'backward')}>
              <Image
              source={require('./../js/res/back_arrow.png')}
              style={{width: 15, height: 15, transform: [{ rotate: '225deg'}]}}/>
            </TouchableHighlight>


            <TouchableHighlight style={{height: 15, width:15}} onPress={() => this.move('left', 'backward')}>
              <Image
              source={require('./../js/res/back_arrow.png')}
              style={{width: 15, height: 15, transform: [{ rotate: '315deg'}]}}/>
            </TouchableHighlight>

        </View>
      </View>
    )
  }
}
