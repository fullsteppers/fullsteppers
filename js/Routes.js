import React from "react";
import { Router, Scene } from "react-native-router-flux";
import SelectDance from "../screens/SelectDance";
import SelectSong from "../screens/SelectSong";
import Home from "../screens/Home";
import DisplayAr from "../screens/DisplayAr";
import CreateDance from "../screens/CreateDance";
import SignIn from "../screens/SignIn";

const Routes = () => (
  <Router>
    <Scene
      navBarButtonColor="white"
      navigationBarStyle={{
        backgroundColor: "#D0021B",
        textColor: "white"
      }}
    >
      <Scene key="SignIn" component={SignIn} title="FULLSTEPPERS" />
      <Scene key="Home" component={Home} title="FULLSTEPPERS" initial={true} />
      <Scene key="CreateDance" component={CreateDance} title="FULLSTEPPERS" />
      <Scene key="SelectDance" component={SelectDance} title="FULLSTEPPERS" />
      <Scene key="SelectSong" component={SelectSong} title="FULLSTEPPERS" />
      <Scene key="DisplayAr" component={DisplayAr} title="FULLSTEPPERS" />
    </Scene>
  </Router>
);

export default Routes;
