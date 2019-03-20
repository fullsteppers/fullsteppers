import { makeRef } from './firebase'

export default async (dance) => {
  const getMoves = async () => {
    this.danceRef = makeRef(`/dances/${dance}`)
    let moves = {}

    moves = await this.danceRef.once("value")
      .then(snapshot => snapshot.val())

    // const danceMoves = Object.assign({}, moves['moves'])
    return {
      ...moves['moves'],
      ...moves['dance array']
    }

    // wait: { properties: { positionX: "+=0.0" }, duration: 5000 },
    // pause: { properties: { positionX: "+=0.0" }, duration: 500 },
    // right: { properties: { positionX: "+=0.3" }, duration: 500 },
    // left: { properties: { positionX: "-=0.3" }, duration: 500 },
    // up: { properties: { positionZ: "-=0.3" }, duration: 500 },
    // down: { properties: { positionZ: "+=0.3" }, duration: 500 },
    //   danceLeft: [
    //     ["up", "down", "pause", "pause"]
    //   ],
    //   danceRight: [
    //     ["pause", "pause", "down", "up"]
    //   ],

    //   // beginning: { ...moves['beginning'] }

    // }
  }

  const moves = await getMoves()
  return moves
}
