import { makeRef } from './firebase'

export default (song) => {
  const getSongs = () => {
    this.songRef = makeRef(`/${song}`)
    let songs = {}
    songs = this.songRef.once("value")
    .then(snapshot => snapshot.val())
    return songs
  }

  const songs = getSongs()

  return songs
}
