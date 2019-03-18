// import * as firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA6OHgv5x9_goudqMxyyT4odBxGtGed4Gc",
//   authDomain: "footsteppers-proofofconcept.firebaseapp.com",
//   databaseURL: "https://footsteppers-proofofconcept.firebaseio.com/",
//   storageBucket: "footsteppers-proofofconcept.appspot.com"
// };

// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

// export function makeRef(path) {
//   return database.ref(path);
// }
import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyDXFmxBJCd9G3npQ3tuVdseewSQnxCsiZs",
  authDomain: "new-project-for-web.firebaseapp.com",
  databaseURL: "https://new-project-for-web.firebaseio.com",
  projectId: "new-project-for-web",
  storageBucket: "",
  messagingSenderId: "608301246833"
};

var app = firebase.initializeApp(config);
const database = firebase.database();
export function makeRef(path) {
  return database.ref(path);
}
