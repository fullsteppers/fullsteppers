import * as firebase from "firebase";

// var config = {
//   apiKey: process.env.GOOGLE_API,
//   authDomain: "new-project-for-web.firebaseapp.com",
//   databaseURL: "https://new-project-for-web.firebaseio.com",
//   projectId: "new-project-for-web",
//   storageBucket: "",
//   messagingSenderId: "608301246833"
// };
var config = {
  apiKey: "AIzaSyB2a-RqRtVe8Gl4ow4nFOsvoSdPMwPA_Bs",
  authDomain: "test-web-db-557e4.firebaseapp.com",
  databaseURL: "https://test-web-db-557e4.firebaseio.com",
  projectId: "test-web-db-557e4",
  storageBucket: "test-web-db-557e4.appspot.com",
  messagingSenderId: "116585550981"
};
var app = firebase.initializeApp(config);
const database = firebase.database();

export function makeRef(path) {
  return database.ref(path);
}
