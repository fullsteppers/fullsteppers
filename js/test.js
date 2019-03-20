const firebase = require("firebase");


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

function makeRef(path) {
    return database.ref(path);
}

const dance = 'salsa'

const danceRef = makeRef(`/dances/${dance}`)

danceRef.once("value")
    .then(snapshot => console.log(JSON.stringify(snapshot.val(), null, 2)))

