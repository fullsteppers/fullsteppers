import { makeRef } from './firebase'

export default async (dance, BPM) => {
  const getMoves = async () => {
    this.danceRef = makeRef(`/dances/${dance}`)
    let moves = {}

    moves = await this.danceRef.once("value")
      .then(snapshot => snapshot.val())

    let adjustedBPM = Object.keys(moves['moves']).map(move => {
      moves['moves'][move]['duration'] = 60 / BPM * moves['moves'][move]['duration'];
      return move;
    })

    return {
      ...moves['moves'],
      ...moves['dance array'], beginning: { ...moves['beginning'] }
    }
  }

  const moves = await getMoves(BPM)
  return moves
}
