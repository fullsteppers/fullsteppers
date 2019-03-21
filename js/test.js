const firebase = require("firebase");

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

function makeRef(path) {
    return database.ref(path);
}

// import { makeRef } from './firebase'

const getSongs = async () => {
    this.songRef = makeRef(`/songs/Candy`)
    let song = {}
    song = await this.songRef.once("value")
        .then(snapshot => snapshot.val())

    console.log(song, song.audioUrl, song.BPM)
}

getSongs()





// const tryThis = async (dance, BPM) => {
// const getMoves = async () => {
//     this.danceRef = makeRef(`/dances/salsa`)
//     let moves = {}

//     moves = await this.danceRef.once("value")
//         .then(snapshot => snapshot.val())

//     let adjustedBPM = Object.keys(moves['moves']).map(move => {
//         moves['moves'][move]['duration'] = 60 / 120 * moves['moves'][move]['duration'];
//         return move;
//         // move['duration'] = (100 / 60) * move['duration']
//     })

//     console.log({
//         // ...moves['moves'],
//         ...moves['moves'],
//         ...moves['dance array'], beginning: { ...moves['beginning'] }
//     }
//     )
// }

// getMoves()

