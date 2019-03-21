import React from "react";
import { Actions } from "react-native-router-flux";
require("./../secrets");
import { ViroARSceneNavigator } from "react-viro";
var InitialARScene = require("./../js/HelloWorldSceneAR");
import timer from "react-native-timer";
import { End } from "../js/End";

export default class DisplayAr extends React.Component {
  constructor() {
    super();
    this.state = {
      go: true
    };
    this.startOver = this.startOver.bind(this);
    this.newTrack = this.newTrack.bind(this);
    this.newDance = this.newDance.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  componentDidMount() {
    timer.setTimeout(
      "start",
      () => {
        this.setState({ go: false });
      },
      60000
    );
  }

  componentWillUnmount() {
    timer.clearTimeout("start");
  }

  startOver() {
    timer.setTimeout(
      "start",
      () => {
        this.setState({ go: false });
      },
      60000
    );
    this.setState({ go: true });
  }

  newTrack() {
    Actions.SelectSong({ dance: this.props.dance });
  }
  newDance() {
    Actions.SelectDance();
  }
  goHome() {
    Actions.Home();
  }

  render() {
    const { dance, song } = this.props;
    if (this.state.go) {
      return (
        <ViroARSceneNavigator
          apiKey={process.env.VIRO_API}
          initialScene={{ scene: InitialARScene }}
          viroAppProps={{ dance, song }}
        />
      );
    } else {
      return (
        <End
          startOver={this.startOver}
          newTrack={this.newTrack}
          newDane={this.newDance}
          home={this.goHome}
          dance={dance}
          song={song}
        />
      );
    }
  }
}
