/*

average width of feet apart: 0.4m
average stride length: 0.8m

lead always begins with LEFT foot

*/

export const animations = {
  // ****************************** LOCOMOTION ****************************** //

  // ------------------------------ 2D MOVEMENTS ---------------------------- //

  // describes the movement of the node but does NOT specify dexter/sinister
  
  //                     LATERAL MOVEMENTS (along x-axis)                     //
  // .............................. FULL STEP ............................... //
  posXFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },
  
  posXFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  // .............................. HALF STEP ............................... //
  posXHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
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
      opacity: 0.75,
      positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  // .............................. HALF STEP ............................... //
  posZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  //                             OBLIQUE MOVEMENTS                            //
  posXposZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZFull4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXposZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZHalf4n: {
    duration: 500,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4', positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXposZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4', positionZ: '+=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZFull8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4', positionZ: '-=0.8',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXposZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  posXnegZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '+=0.4', positionZ: '-=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXposZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
      positionX: '-=0.4', positionZ: '+=0.4',
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  negXnegZHalf8n: {
    duration: 250,
    easing: 'EaseOut',
    properties: {
      opacity: 0.75,
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

  // -------------------- RESTS --------------------------- //

  rest4n: { duration: 500, properties: {} },

  rest8n: { duration: 250, properties: {} },

  rest16n: { duration: 125, properties: {} },

  // ******************** DECORATIONS ********************* //

  blink16n: {
    duration: 125,
    easing: 'Bounce',
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
    easing: 'EaseOut',
    properties: {
      opacity: 0,
    },
  },

  grow4n: {
    // delay: 250,
    duration: 250,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  grow8n: {
    // delay: 125,
    duration: 125,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: '+=1', scaleY: '+=1', scaleZ: '+=1',
    },
  },

  grow16n: {
    // delay: 62.5,
    duration: 62.5,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 1, scaleY: 1, scaleZ: 1,
    },
  },

  shrink4n: {
    // delay: 250,
    duration: 500,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 0, scaleY: 0, scaleZ: 0,
    },
  },

  shrink8n: {
    // delay: 125,
    duration: 250,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 0, scaleY: 0, scaleZ: 0,
    },
  },

  shrink16n: {
    // delay: 62.5,
    duration: 125,
    easing: 'EaseInEaseOut',
    properties: {
      scaleX: 0, scaleY: 0, scaleZ: 0,
    },
  },

  // ******************** ROUTINES ************************ //

  ft: [
    ['negZFull8n','rest8n','rest8n','negZFull8n','negXHalf8n','rest8n','rest8n','posZFull8n','posZFull8n','rest8n','rest8n','posXHalf8n',],
    ['shrink16n','rest16n','rest8n','rest8n','shrink8n','rest8n','rest8n','rest8n','shrink8n','rest8n','rest8n','rest8n','shrink16n','rest16n',],
  ],
  // ftNext: [
  //   ['rest4n','negZFull','rest4n','negXFull','posZFull','rest4n','posX4n','rest4n'],
  //   ['rest4n','fadeIn','fadeOut','fadeOut','fadeIn','fadeIn','fadeOut','fadeIn']
  // ],
  ftB: [
    ['rest8n','negZFull8n','negZFull8n','rest8n','rest8n','negXHalf8n','posZFull8n','rest8n','rest8n','posZFull8n','posXHalf8n','rest8n'],
    ['rest8n','shrink8n','rest8n','rest8n','rest8n','shrink16n','rest16n','shrink16n','rest16n','rest8n','rest8n','shrink8n','rest8n','rest8n']
  ],
  // ftBNext: [
  //   ['negZHalf','rest8n','negXHalf','posZHalf','rest8n','posXHalf','rest8n','rest8n'],
  //   ['','','','','','','','']
  // ],
  ft3d:    [
    ['negZFull8n','rest8n','rest8n','negZFull8n','negXHalf8n','rest8n','rest8n','posZFull8n','posZFull8n','rest8n','rest8n','posXHalf8n']
  ],
  ft3dB:   [
    ['rest8n','negZFull8n','negZFull8n','rest8n','rest8n','negXHalf8n','posZFull8n','rest8n','rest8n','posZFull8n','posXHalf8n','rest8n']
  ],
};

module.exports = animations;
