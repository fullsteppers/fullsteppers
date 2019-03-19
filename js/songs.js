import { makeRef } from './firebase'

export default async (selectedSong) => {
  const getSongs = async () => {
    // this.songRef = makeRef(`/songs/${selectedSong}`)
    this.songRef = makeRef(`/songs/Candy`)
    let song = {}
    song = await this.songRef.once("value")
    .then(snapshot => snapshot.val())

    return {song: song.audioUrl}
  }

  const songs = await getSongs()

  return songs
}
