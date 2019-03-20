import { makeRef } from './firebase'

export default async (dance) => {
  const getMoves = async () => {
  this.danceRef = makeRef(`/dances/${dance}`)
  let moves = {}

  moves = await this.danceRef.once("value")
  .then(snapshot => snapshot.val())

  // console.log({...moves['moves'], ...moves['dance array'], beginning: moves['beginning']})
  let returnObj = {beginning: moves['beginning']}
  returnObj = Object.assign(returnObj, moves['moves'])
  returnObj = Object.assign(returnObj, moves['dance array'])
  console.log(returnObj)
  // return {...moves['moves'], ...moves['dance array'], beginning: moves['beginning']}
  return returnObj
  }

  const moves = await getMoves()
  return moves
}
