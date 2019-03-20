import { makeRef } from './firebase'

export default async (dance) => {
  const getMoves = async () => {
  this.danceRef = makeRef(`/dances/${dance}`)
  let moves = {}

  moves = await this.danceRef.once("value")
  .then(snapshot => snapshot.val())

  return {...moves['moves'], ...moves['dance array'], beginning: moves['beginning']}
  }

  const moves = await getMoves()
  return moves
}
