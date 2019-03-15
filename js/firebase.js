import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6OHgv5x9_goudqMxyyT4odBxGtGed4Gc",
  authDomain: "footsteppers-proofofconcept.firebaseapp.com",
  databaseURL: "https://footsteppers-proofofconcept.firebaseio.com/",
  storageBucket: "footsteppers-proofofconcept.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export function makeRef(path) {
  return database.ref(path);
}
