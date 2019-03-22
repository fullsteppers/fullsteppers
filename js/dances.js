import { makeRef } from "./firebase";
import * as firebase from "firebase";

export default async dance => {
  const getMoves = async () => {
    let danceRef = makeRef(`/dances/${dance}`);
    console.log(danceRef);

    let moves = {};
    moves = await danceRef.once("value").then(snapshot => snapshot.val());
    if (!moves) {
      danceRef = makeRef(
        `users/${firebase.auth().currentUser.uid}/dances/${dance}`
      );
      moves = await danceRef.once("value").then(snapshot => snapshot.val());
    }
    return {
      ...moves["moves"],
      ...moves["dance array"],
      beginning: { ...moves["beginning"] }
    };
  };

  const moves = await getMoves();
  return moves;
};
