/*

average width of feet apart: 0.4m
average stride length: 0.8m

lead always begins with LEFT foot

*/

const lookahead = routine => routine.map(array => array.push(array.shift))
export const animations = {
  // ****************************** UTILITIES ******************************* //

  // lookahead = routine => routine.split(',').forEach(array => {
  //   return array.push(array.shift);
  // }),
  // ****************************** LOCOMOTION ****************************** //

  // ------------------------------ 2D MOVEMENTS ---------------------------- //

  // describes the movement of the node but does NOT specify dexter/sinister
  
  //                     LATERAL MOVEMENTS (along x-axis)                     //
  // .............................. FULL STEP ............................... //
  posXFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },
  
  posXFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  // .............................. HALF STEP ............................... //
  posXHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  //                  LONGITUDINAL MOVEMENTS (along z-axis)                   //
  // .............................. FULL STEP ............................... //
  posZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  // .............................. HALF STEP ............................... //
  posZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  //                             OBLIQUE MOVEMENTS                            //
  posXposZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXposZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXposZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXposZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '+=0.4', positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.5,
      positionX: '-=0.4', positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  //                     LATERAL ROTATIONS (about y-axis)                     //
  posYawFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateY: '+=90',
    },
  },

  negYawFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateY: '-=90',
    },
  },

  posYawHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateY: '+=45',
    },
  },

  negYawHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateY: '-=45',
    },
  },

  posYawFull16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateY: '+=90',
    },
  },

  negYawFull16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateY: '-=90',
    },
  },

  posYawHalf16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateY: '+=45',
    },
  },

  negYawHalf16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateY: '-=45',
    },
  },

  // ----------------------------- 3D MOVEMENTS ----------------------------- //

  //                    VERTICAL MOVEMENTS (along y-axis)                     //
  posYFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      positionY: '+=0.5',
    },
  },

  negYFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      positionY: '-=0.5',
    },
  },

  posYHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      positionY: '+=0.25',
    },
  },

  negYHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      positionY: '-=0.25',
    },
  },

  posYFull16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      positionY: '+=0.5',
    },
  },

  negYFull16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      positionY: '-=0.5',
    },
  },

  posYHalf16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      positionY: '+=0.25',
    },
  },

  negYHalf16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      positionY: '-=0.25',
    },
  },

  // VERTICAL ROTATIONS (about x-axis)
  posPitFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateX: '+=60',
    },
  },

  negPitFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateX: '-=60',
    },
  },

  posPitHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateX: '+=30',
    },
  },

  negPitHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      rotateX: '-=30',
    },
  },

  posPitFull16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateX: '+=60',
    },
  },

  negPitFull16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateX: '-=60',
    },
  },

  posPitHalf16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateX: '+=30',
    },
  },

  negPitHalf16n: {
    duration: 125,
    easing: 'EaseOut',
    properties: {
      rotateX: '-=30',
    },
  },

  // -------------------- RESTS --------------------------- //

  rest4n: { duration: 500, properties: {} },

  rest8n: { duration: 250, properties: {} },

  rest16n: { duration: 125, properties: {} },

  // ******************** DECORATIONS ********************* //

  blink8n: {
    duration: 250,
    easing: 'Linear',
    properties: {
      opacity: 1,
    },
  },

  // translucent8n: {
  //   duration: 250,
  //   easing: 'EaseInEaseOut',
  //   properties: {
  //     opacity: 0.5,
  //   },
  // },

  fadeOut8n: {
    duration: 250,
    easing: 'EaseIn',
    properties: {
      opacity: 0,
    },
  },

  fadeOut16n: {
    duration: 125,
    easing: 'EaseIn',
    properties: {
      opacity: 0,
    },
  },

  grow4n: {
    duration: 500,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  grow8n: {
    duration: 250,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: '+=1', scaleY: '+=1', scaleZ: '+=1',
    },
  },

  grow16n: {
    duration: 125,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  shrink4n: {
    duration: 500,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 0, scaleY: 0, scaleZ: 0,
    },
  },

  shrink8n: {
    duration: 250,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 0, scaleY: 0, scaleZ: 0,
    },
  },

  shrink16n: {
    duration: 125,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 0, scaleY: 0, scaleZ: 0,
    },
  },

  // ******************** ROUTINES ************************ //

  // ----------------------- FOXTROT ----------------------- //
  ft: [
    // LATERAL MOVEMENT
    ['negZFull8n','rest8n','rest8n','negZFull8n','negXHalf8n','rest8n','rest8n','posZFull8n','posZFull8n','rest8n','rest8n','posXHalf8n',],
    // DECORATION
    ['rest8n','fadeOut8n','rest8n','fadeOut8n','rest8n','rest8n','rest8n','fadeOut8n','rest8n','rest8n','rest8n','fadeOut16n','rest16n',],
  ],

  ftB: [
    // LATERAL MOVEMENT
    ['rest8n','negZFull8n','negZFull8n','rest8n','rest8n','negXHalf8n','posZFull8n','rest8n','rest8n','posZFull8n','posXHalf8n','rest8n',],
    // DECORATION
    ['rest8n','fadeOut8n','rest8n','rest8n','rest8n','fadeOut16n','rest16n','rest8n','fadeOut8n','rest8n','fadeOut8n','rest8n','rest8n',],
  ],

  ft3d: [
    // LATERAL MOVEMENT
    ['negZFull8n','rest8n','rest8n','negZFull8n','negXHalf8n','rest8n','rest8n','posZFull8n','posZFull8n','rest8n','rest8n','posXHalf8n',],
    // VERTICAL MOVEMENT
    ['posYFull16n','negYFull16n','rest8n','rest8n','posYFull8n','negYFull8n','rest8n','rest8n','posYFull8n','negYFull8n','rest8n','rest8n','posYFull16n','negYFull16n',],
    // ROTATIONS
    ['posPitHalf16n','negPitHalf16n','rest8n','rest8n','rest8n','rest8n','rest8n','rest8n','negPitHalf8n','posPitHalf8n','rest8n','rest8n','rest8n',],
    //DECORATIONS
    ['blink8n','rest8n','rest8n','blink8n','rest8n','rest8n','rest8n','blink8n','rest8n','rest8n','rest8n','blink8n',],
  ],

  ft3dB: [
    // LATERAL MOVEMENT
    ['rest8n','negZFull8n','negZFull8n','rest8n','rest8n','negXHalf8n','posZFull8n','rest8n','rest8n','posZFull8n','posXHalf8n','rest8n',],
    // VERTICAL MOVEMENT
    ['rest8n','posYFull8n','negYFull8n','rest8n','rest8n','posYFull16n','negYFull16n','posYFull16n','negYFull16n','rest8n','rest8n','posYFull8n','negYFull8n','rest8n',],
    // ROTATIONS
    ['rest8n','posPitHalf8n','negPitHalf8n','rest8n','rest8n','rest8n','negPitHalf16n','posPitHalf16n','rest8n','rest8n','rest8n','rest8n','rest8n',],
    //DECORATIONS
    ['rest8n','blink8n','rest8n','rest8n','rest8n','blink8n','blink8n','rest8n','rest8n','blink8n','rest8n','rest8n',],
  ],

  // ----------------------- WALTZ ----------------------- //
  w: [
    // LATERAL MOVEMENT
    ['negZFull8n','rest8n','rest8n','rest8n','posXHalf8n','rest8n','rest8n','rest8n','negXposZFull8n','rest8n','rest8n','rest8n',],
    // DECORATION
    ['rest8n','fadeOut8n','rest8n','rest8n','rest8n','fadeOut8n','rest8n','rest8n','rest8n','fadeOut8n','rest8n','rest8n',],
  ],

  wB: [
    // LATERAL MOVEMENT
    ['rest8n','rest8n','posXnegZFull8n','rest8n','rest8n','rest8n','posZFull8n','rest8n','rest8n','rest8n','negXHalf8n','rest8n',],
    // DECORATION
    ['rest8n','rest8n','rest8n','fadeOut8n','rest8n','rest8n','rest8n','fadeOut8n','rest8n','rest8n','rest8n','fadeOut8n',],
  ],

  w3d: [
    // LATERAL MOVEMENT
    ['negZFull8n','rest8n','rest8n','rest8n','posXHalf8n','rest8n','rest8n','rest8n','negXposZFull8n','rest8n','rest8n','rest8n',],
    // VERTICAL MOVEMENT
    ['posYFull8n','negYFull8n','rest8n','rest8n','posYHalf8n','negYHalf8n','rest8n','rest8n','posYFull8n','negYFull8n','rest8n','rest8n',],
    // ROTATIONS
    ['posPitHalf8n','negPitHalf8n','rest8n','rest8n','rest8n','rest8n','rest8n','rest8n','negPitHalf8n','posPitHalf8n','rest8n','rest8n',],
    // DECORATIONS
    ['blink8n','rest8n','rest8n','rest8n','blink8n','rest8n','rest8n','rest8n','blink8n','rest8n','rest8n','rest8n',],
  ],

  w3dB: [
    // LATERAL MOVEMENT
    ['rest8n','rest8n','posXnegZFull8n','rest8n','rest8n','rest8n','posZFull8n','rest8n','rest8n','rest8n','negXHalf8n','rest8n',],
    // VERTICAL MOVEMENT
    ['rest8n','rest8n','posYFull8n','negYFull8n','rest8n','rest8n','posYFull8n','negYFull8n','rest8n','rest8n','posYHalf8n','negYHalf8n',],
    // ROTATIONS
    ['rest8n','rest8n','posPitHalf8n','negPitHalf8n','rest8n','rest8n','negPitHalf8n','posPitHalf8n','rest8n','rest8n','rest8n','rest8n',],
    // DECORATIONS
    ['rest8n','rest8n','blink8n','rest8n','rest8n','rest8n','blink8n','rest8n','rest8n','rest8n','blink8n','rest8n',],
  ],

  // ----------------------- SALSA ----------------------- //
  s: [
    // LATERAL MOVEMENT
    ['posZFull4n','negZFull4n','rest8n','rest8n','rest8n','rest8n',],
    // DECORATION
    ['rest8n','fadeOut16n','rest16n','rest8n','fadeOut16n','rest16n','rest8n','rest8n','rest8n','rest8n',],
  ],

  sB: [
    // LATERAL MOVEMENT
    ['rest8n','rest8n','rest8n','rest8n','negZFull4n','posZFull4n',],
    // DECORATION
    ['rest8n','rest8n','rest8n','rest8n','rest8n','fadeOut16n','rest16n','rest8n','fadeOut16n','rest16n',],
  ],

  s3d: [
    // LATERAL MOVEMENT
    ['posZFull4n','negZFull4n','rest8n','rest8n','rest8n','rest8n',],
    // VERTICAL MOVEMENT
    ['posYFull8n','negYFull8n','posYFull8n','negYFull8n','rest8n','rest8n','rest8n','rest8n',],
    // ROTATIONS
    ['negPitHalf8n','posPitHalf8n','posPitHalf8n','negPitHalf8n','rest8n','rest8n','rest8n','rest8n',],
    // DECORATIONS
    ['blink8n','rest8n','blink8n','rest8n','rest8n','rest8n','rest8n','rest8n',],
  ],

  s3dB: [
    // LATERAL MOVEMENT
    ['rest8n','rest8n','rest8n','rest8n','negZFull4n','posZFull4n',],
    // VERTICAL MOVEMENT
    ['rest8n','rest8n','rest8n','rest8n','posYFull8n','negYFull8n','posYFull8n','negYFull8n',],
    // ROTATIONS
    ['rest8n','rest8n','rest8n','rest8n','posPitHalf8n','negPitHalf8n','negPitHalf8n','posPitHalf8n',],
    // DECORATIONS
    ['rest8n','rest8n','rest8n','rest8n','blink8n','rest8n','blink8n','rest8n',],
  ], 
};

module.exports = animations;
