import * as firebase from "firebase";
function addMove(move) {
  let newMove = moves[move];
  let otherMove = moves.pause;
  return { newMove: newMove, otherMove: otherMove };
}

function submitDance(leftFoot, rightFoot) {
  const danceLeft = leftFoot.map(move => Object.keys(move)[0]);
  const danceRight = rightFoot.map(move => Object.keys(move)[0]);
  let currentMoves = {};

  danceLeft.forEach(move => {
    if (!currentMoves[move]) currentMoves[move] = moves[move][move];
  });

  danceRight.forEach(move => {
    if (!currentMoves[move]) currentMoves[move] = moves[move][move];
  });

  const dance = {
    beginning: moves.beginning,
    "dance array": { danceLeft: [danceLeft], danceRight: [danceRight] },
    moves: currentMoves
  };

  return dance

  // const thisMoment = new Date();

  // firebase
  //   .database()
  //   .ref(`users/${firebase.auth().currentUser.uid}/dances`)
  //   .update({
  //     [thisMoment]: dance
  //   });
}

const moves = {
  beginning: { duration: 3000, properties: { positionX: "+=0.0" } },
  forward: {
    forward: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionZ: "-=.3" }
    }
  },
  forwardright: {
    forwardright: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionZ: "-=.3", positionX: "+=.3" }
    }
  },
  forwardleft: {
    forwardleft: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionZ: "-=.3", positionX: "-=.3" }
    }
  },
  backward: {
    backward: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionZ: "+=.3" }
    }
  },
  backwardleft: {
    backwardleft: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionZ: "+=.3", positionX: "-=.3" }
    }
  },
  backwardright: {
    backwardright: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionZ: "+=.3", positionX: "+=.3" }
    }
  },
  left: {
    left: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionX: "-=.3" }
    }
  },
  right: {
    right: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionX: "+=.3" }
    }
  },
  pause: {
    pause: {
      duration: 750,
      easing: "EaseOut",
      properties: { positionX: "+=0.0" }
    }
  }
};

module.exports = { addMove, submitDance };
