import React from "react";
import { Actions } from "react-native-router-flux";
require("./../secrets");
import { ViroARSceneNavigator } from "react-viro";
var InitialARScene = require("./../js/HelloWorldSceneAR");
import timer from "react-native-timer";
import getTheme from "../native-base-theme/components";
import {
  Container,
  Card,
  Content,
  CardItem,
  Text,
  StyleProvider,
  Body,
  Button
} from "native-base";

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

  componentWillMount() {
    timer.clearTimeout(this);
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
    // if (this.state.go) {
    //   return (
    //     <ViroARSceneNavigator
    //       apiKey={process.env.VIRO_API}
    //       initialScene={{ scene: InitialARScene }}
    //       viroAppProps={{ dance, song }}
    //     />
    //   );
    // } else {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  You just did the {dance} to the song: {song}
                </Text>
                <Text>Start Over</Text>
                <Button title="Start Over" />
                <Text>end of card 1</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button title="Start Over" onPress={this.startOver}>
                  <Text>end of card 2</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Start Over</Text>
                <Button title="Start Over" />
                <Text>end of card 3</Text>
              </Body>
            </CardItem>
          </Card>
        </Container>
      </StyleProvider>

      // <Content>
      //   <Text>
      //     You just did the {dance} to the song: {song}
      //   </Text>
      //   <Button title="Start Over" onPress={this.startOver} />

      //   <Button title="Start Over" onPress={this.startOver}>
      //     <Text>Start Over</Text>
      //   </Button>

      //   <Button title="Pick a New Track" onPress={this.newTrack}>
      //     <Text>Pick a New Track</Text>
      //   </Button>

      //   <Button title="Pick a New Dance" onPress={this.newDance}>
      //     <Text>Pick a New Dance</Text>
      //   </Button>

      //   <Button title="Home" onPress={this.goHome}>
      //     <Text>Home</Text>
      //   </Button>
      // </Content>
    );
    // }
  }
}
