import React from "react";
import { Router, Scene } from "react-native-router-flux";
import SelectDance from "../screens/SelectDance";
import SelectSong from "../screens/SelectSong";
import Home from "../screens/Home";
import DisplayAr from "../screens/DisplayAr";
import { StyleSheet, Image } from "react-native";

const Routes = () => (
  <Router
    navigationBarStyle={{ backgroundColor: "#81b71a" }}
    titleStyle={styles.navTitle}
    // hideNavBar="true"
    // renderBackButton={() => (
    //   <Image source={require("./dance_icon.png")} size={35} />
    // )}
  >
    <Scene>
      <Scene key="Home" component={Home} title="FULLSTEPPERS" initial={true} />
      <Scene key="SelectDance" component={SelectDance} title="FULLSTEPPERS" />
      <Scene key="SelectSong" component={SelectSong} title="FULLSTEPPERS" />
      <Scene key="DisplayAr" component={DisplayAr} />
    </Scene>
  </Router>
);

export default Routes;

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red" // changing navbar color
  },
  navTitle: {
    color: "white" // changing navbar title color
  }
});
