import React from "react";
import { Actions } from "react-native-router-flux";
require("./../secrets");
import { ViroARSceneNavigator } from "react-viro";
var InitialARScene = require("./../js/HelloWorldSceneAR");
import timer from "react-native-timer";
import End from "../js/End";

export default class DisplayAr extends React.Component {
  constructor() {
    super();
    this.state = {
      go: true,
      run: true
    };
    this.startOver = this.startOver.bind(this);
    this.newTrack = this.newTrack.bind(this);
    this.newDance = this.newDance.bind(this);
    this.goHome = this.goHome.bind(this);
    this.fetchYelp = this.fetchYelp.bind(this);
  }
  componentDidMount() {
    timer.setTimeout(
      "start",
      () => {
        this.setState({ go: false });
      },
      600
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

  fetchYelp() {
    Actions.Yelp();
  }

  render() {
    const { dance, song, stance, timing } = this.props;
    const { run } = this.state
    if (this.state.go) {
      return (
        <ViroARSceneNavigator
          apiKey={process.env.VIRO_API}
          initialScene={{ scene: InitialARScene }}
          viroAppProps={{ dance, song, stance, timing }}
        />
      );
    } else {
      return (
        <End
          startOver={this.startOver}
          newTrack={this.newTrack}
          newDance={this.newDance}
          home={this.goHome}
          fetchYelp={this.fetchYelp}
          dance={dance}
          song={song}
        />
      );
    }
  }
}
