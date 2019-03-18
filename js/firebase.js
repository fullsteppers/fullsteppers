import "../secrets.js";

import * as firebase from "firebase";
var config = {
  apiKey: process.env.GOOGLE_API,
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
