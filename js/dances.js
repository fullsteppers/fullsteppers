import { makeRef } from './firebase'

export default (dance) => {
  const getMoves = () => {
  this.danceRef = makeRef(`/${dance}`)
  let moves = {}

  moves = this.danceRef.once("value")
  .then(snapshot => snapshot.val())

  return moves
  }

  const moves = getMoves()
  return moves
}
