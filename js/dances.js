import { makeRef } from "./firebase";
import * as firebase from "firebase";

export default async (dance, BPM) => {
  const getMoves = async () => {
    let danceRef = makeRef(`/dances/${dance}`);


    let moves = {};
    moves = await danceRef.once("value").then(snapshot => snapshot.val());
    if (!moves) {
      danceRef = makeRef(
        `users/${firebase.auth().currentUser.uid}/dances/${dance}`
      );
      moves = await danceRef.once("value").then(snapshot => snapshot.val());


      Object.keys(moves["moves"]).forEach(move => {
        moves["moves"][move]["duration"] =
          (60 / BPM) * moves["moves"][move]["duration"];
      });


      return {dance: {
        ...moves["moves"],
        ...moves["dance array"],
        beginning: { ...moves["beginning"]}}, custom: true};
    } else {
      let animationsRef = makeRef(`/animations/moves`);
      let animations = {}
      animations = await animationsRef.once('value').then(snapshot => snapshot.val())

      const allMoves = {}
      moves['dance array']['3dDanceLeft'].forEach(arr => {
        arr.forEach(moves => {
          if(!allMoves[moves]) allMoves[moves] = true
        })
      })

      moves['dance array']['3dDanceRight'].forEach(arr => {
        arr.forEach(moves => {
          if(!allMoves[moves]) allMoves[moves] = true
        })
      })

      moves['dance array']['danceRight'].forEach(arr => {
        arr.forEach(moves => {
          if(!allMoves[moves]) allMoves[moves] = true
        })
      })

      moves['dance array']['danceLeft'].forEach(arr => {
        arr.forEach(moves => {
          if(!allMoves[moves]) allMoves[moves] = true
        })
      })

      Object.keys(allMoves).forEach(move => {
        animations[move]['duration'] = (140 / BPM) * animations[move]['duration']
      })

      return {dance: {...animations, ...moves['dance array']}, custom: false}
    }
  };

  const moves = await getMoves(BPM);

  return moves;
};

// Get all the animations from the database.
// Get the dance from the database for 2d and 3d
// If 2d is undefined check if it is in users
// If in users then create a 3d array called 3dDanceLeft & 3DDanceRight
// adjust the bpm for the animations in the dance.
// spread the animations, and the two arrays
