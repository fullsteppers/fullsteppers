import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import SelectDance from './screens/SelectDance'
import SelectSong from './screens/SelectSong'
import Home from './screens/Home'
import DisplayAr from './screens/DisplayAr'

const Routes = () => (
  <Router>
    <Scene>
      <Scene key="Home" component= {Home} title='FULLSTEPPERS' initial={true} />
      <Scene key="SelectDance" component= {SelectDance} title='FULLSTEPPERS' />
      <Scene key="SelectSong" component= {SelectSong} title='FULLSTEPPERS' />
      <Scene key="DisplayAr" component= {DisplayAr} />
    </Scene>
  </Router>
)

export default Routes
