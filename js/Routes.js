import React from "react";
import { Router, Scene } from "react-native-router-flux";
import SelectDance from "../screens/SelectDance";
import SelectSong from "../screens/SelectSong";
import SelectStanceWidth from "../screens/SelectStanceWidth"
import SelectTiming from "../screens/SelectTiming"
import Home from "../screens/Home";
import DisplayAr from "../screens/DisplayAr";
import CreateDance from "../screens/CreateDance";
import DanceName from '../screens/DanceName'

const Routes = () => (
  <Router>
    <Scene
      navBarButtonColor="white"
      navigationBarStyle={{
        backgroundColor: "#D0021B",
        textColor: "white"
      }}
    >
      <Scene key="Home" component={Home} title="FULLSTEPPERS" initial={true} />
      <Scene key="CreateDance" component={CreateDance} title="FULLSTEPPERS" />
      <Scene key="SelectDance" component={SelectDance} title="FULLSTEPPERS" />
      <Scene key="SelectSong" component={SelectSong} title="FULLSTEPPERS" />
      <Scene key="SelectStanceWidth" component={SelectStanceWidth} title="FULLSTEPPERS" />
      <Scene key="SelectTiming" component={SelectTiming} title="FULLSTEPPERS" />
      <Scene key="DisplayAr" component={DisplayAr} title="FULLSTEPPERS" />
      <Scene key="DanceName" component={DanceName} title="FULLSTEPPERS" />
    </Scene>
  </Router>
);

export default Routes;
