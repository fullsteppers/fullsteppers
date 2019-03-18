import Spotify from 'rn-spotify-sdk'

const clientId = 'b43e80d111cf4c648729318aa7d8e507'
const player = new Spotify.initialize({
  clientId,
  redirectURL: 'http://localhost:8081/'
})