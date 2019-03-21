//add move
//args: move, foot
//forward? Z +/-
function addMove(move) {
  let newMove = moves[move];
  let otherMove = moves.pause;
  return { newMove: newMove, otherMove: otherMove };
}

// //submit dance
// //args: name, movesL, movesR
// //
// function submitDance(userId, name, email, imageUrl) {
//   firebase
//     .database()
//     .ref("users/" + userId)
//     .set({
//       username: name,
//       email: email,
//       profile_picture: imageUrl
//     });
// }

const moves = {
  forward: {},
  forwardright: {},
  forwardleft: {},
  backward: {},
  backwardleft: {},
  backwardright: {},
  left: {},
  right: {},
  pause: {}
};

module.exports = { addMove };
