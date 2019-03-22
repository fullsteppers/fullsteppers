/*

average width of feet apart: 0.4m
average stride length: 0.8m

lead always begins with LEFT foot

*/

export const animations = {
  // ******************** LOCOMOTION ********************** //

  // -------------------- 2D MOVEMENTS -------------------- //

  // LATERAL MOVEMENTS (along x-axis)
  // describes the movement of the node but does NOT specify dexter/sinister
  posXFull:     {duration: 500, easing: "EaseOut",
                  properties: {positionX: "+=0.8"}},
  negXFull:     {duration: 500, easing: "EaseOut",
                  properties: {positionX: "-=0.8"}},
  
  posXHalf:     {duration: 250, easing: "EaseOut",
                  properties: {positionX: "+=0.4"}},
  negXHalf:     {duration: 250, easing: "EaseOut",
                  properties: {positionX: "-=0.4"}},
  
  // LONGITUDINAL MOVEMENTS (along z-axis)
  posZFull:     {duration: 500, easing: "EaseOut",
                  properties: {positionZ: "+=0.8"}},
  negZFull:     {duration: 500, easing: "EaseOut",
                  properties: {positionZ: "-=0.8"}},

  posZHalf:     {duration: 250, easing: "EaseOut",
                  properties: {positionZ: "+=0.4"}},
  negZHalf:     {duration: 250, easing: "EaseOut",
                  properties: {positionZ: "-=0.4"}},

  // OBLIQUE MOVEMENTS
  posXposZFull: {duration: 500, easing: "EaseOut",
                  properties: {positionX: "+=0.8", positionZ: "+=0.8"}},
  posXnegZFull: {duration: 500, easing: "EaseOut",
                  properties: {positionX: "+=0.8", positionZ: "-=0.8"}},
  negXposZFull: {duration: 500, easing: "EaseOut",
                  properties: {positionX: "-=0.8", positionZ: "+=0.8"}},
  negXnegZFull: {duration: 500, easing: "EaseOut",
                  properties: {positionX: "-=0.8", positionZ: "-=0.8"}},

  posXposZHalf: {duration: 250, easing: "EaseOut",
                  properties: {positionX: "+=0.4", positionZ: "+=0.4"}},
  posXnegZHalf: {duration: 250, easing: "EaseOut",
                  properties: {positionX: "+=0.4", positionZ: "-=0.4"}},
  negXposZHalf: {duration: 250, easing: "EaseOut",
                  properties: {positionX: "-=0.4", positionZ: "+=0.4"}},
  negXnegZHalf: {duration: 250, easing: "EaseOut",
                  properties: {positionX: "-=0.4", positionZ: "-=0.4"}},

  // LATERAL ROTATIONS (about y-axis)
  posYawFull:   {duration: 250, easing: "EaseOut",
                  properties: {rotateY: "+=90"}},
  negYawFull:   {duration: 250, easing: "EaseOut",
                  properties: {rotateY: "-=90"}},

  posYawHalf:   {duration: 250, easing: "EaseOut",
                  properties: {rotateY: "+=45"}},
  negYawHalf:   {duration: 250, easing: "EaseOut",
                  properties: {rotateY: "-=45"}},

  // -------------------- 3D MOVEMENTS -------------------- //

  // VERTICAL MOVEMENTS (along y-axis)
  posYFull:     {duration: 250, easing: "EaseOut",
                  properties: {positionY: "+=0.5"}},
  negYFull:     {duration: 250, easing: "EaseOut",
                  properties: {positionY: "-=0.5"}},
  
  posYHalf:     {duration: 250, easing: "EaseOut",
                  properties: {positionY: "+=0.25"}},
  negYHalf:     {duration: 250, easing: "EaseOut",
                  properties: {positionY: "-=0.25"}},

  // VERTICAL ROTATIONS (about x-axis)
  posPitFull:   {duration: 250, easing: "EaseOut",
                  properties: {rotateX: "+=60"}},
  negPitFull:   {duration: 250, easing: "EaseOut",
                  properties: {rotateX: "-=60"}},
  
  posPitHalf:   {duration: 250, easing: "EaseOut",
                  properties: {rotateX: "+=30"}},
  negPitHalf:   {duration: 250, easing: "EaseOut",
                  properties: {rotateX: "-=30"}},

  // -------------------- RESTS --------------------------- //

  rest4n:      {duration: 500, properties: {}},
  rest8n:      {duration: 250, properties: {}},

  // ******************** DECORATIONS ********************* //

  fadeIn:       {duration: 250, easing: "Bounce",
                  properties: {opacity: 0.75}},
  translucent:  {duration: 250, easing: "EaseInEaseOut",
                  properties: {opacity: 0.25}},
  fadeOut:      {duration: 250, easing: "EaseOut",
                  properties: {opacity: 0}},

  grow:         {duration: 250, easing: "Bounce",
                  properties: {scaleX: 1, scaleY: 1, scaleZ: 1}},
  shrink:       {duration: 250, easing: "EaseInEaseOut",
                  properties: {scaleX: 0, scaleY: 0, scaleZ: 0}},

  // ******************** ROUTINES ************************ //

  foxTrot: [
    ['negZHalf','rest4n','negXnegZHalf','rest4n','negXnegZHalf','rest4n','','rest4n'],
    ['rest4n','rest4n','posYawHalf','rest4n']
  ],
  foxTrotB: [
    ['rest4n','negZFull','rest4n','negXnegZHalf','rest4n','negXnegZFull','rest4n',''],
    ['rest4n','rest4n','rest4n','posYawHalf']
  ],
  // foxTrot3d:    [
    
  // ],
  // foxTrot3dB:   [
    
  // ],
}

module.exports = animations