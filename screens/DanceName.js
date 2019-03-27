import React from "react";
import {
  Item,
  Input,
  Grid,
  Row,
  Label,
  Button,
  Text,
  Toast
} from "native-base";
import * as firebase from "firebase";
import { Actions } from "react-native-router-flux";
import moment from "moment";
import { View } from "react-native";
import client from "../js/giphy";
import GifPicker from "../js/GifPicker";

export default class DanceName extends React.Component {
  constructor() {
    super();
    this.state = {
      danceName: "",
      gif: "",
      gifs: []
    };
    this.submitDance = this.submitDance.bind(this);
    this.loadGifs = this.loadGifs.bind(this);
    this.selectGif = this.selectGif.bind(this);
    this.shuffleGifResults = this.shuffleGifResults.bind(this);
  }

  componentDidMount() {
    this.loadGifs();
  }

  loadGifs() {
    client
      .search("gifs", { q: "dance" })
      .then(response => {
        response.data.forEach(gifObject => {
          this.setState({
            gifs: [...this.state.gifs, gifObject.images.fixed_height.url],
            gif: gifObject.images.fixed_height.url
          });
        });
      })
      .catch(err => {});
  }

  shuffleGifResults() {
    const newGifsArr = this.state.gifs.sort(() => Math.random() - 0.5);
    this.setState({ gifs: newGifsArr });
  }

  selectGif(gif) {
    this.setState({ gif: this.state.gifs[gif] });
  }

  submitDance(evt) {
    const saveTime = moment().format("MMMM Do YYYY, [at] h:mm:ss a");
    const { dance } = this.props;
    let danceGif = this.state.gif;
    dance.blurb = `You created this dance on ${saveTime}.`;
    dance.gif = danceGif;
    const danceName = this.state.danceName;
    console.log(dance);
    firebase
      .database()
      .ref(`users/${firebase.auth().currentUser.uid}/dances`)
      .update({
        [danceName]: dance
      });
    Toast.show({
      text: "Dance Created!",
      duration: 3000
    });
    Actions.Home();
  }

  saveGif(num) {
    this.setState({ gif: this.state.gifs[num] });
  }

  render() {
    return (
      <Grid
        style={{
          flex: 1,
          backgroundColor: "white"
        }}
      >
        <Row
          size={1}
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Text>Your Dance's Info</Text>
          <Item>
            <Label>Dance Name:</Label>
            <Input
              onChangeText={val => this.setState({ danceName: val })}
              value={this.state.danceName}
            />
          </Item>
        </Row>
        <Row size={2}>
          <GifPicker
            selectGif={this.selectGif}
            gifs={this.state.gifs}
            selectedGif={this.state.gif}
          />
        </Row>
        <Row
          size={1}
          style={{
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <Button light onPress={this.shuffleGifResults}>
            <Text>Shuffle Gifs</Text>
          </Button>
          <Button light onPress={this.submitDance}>
            <Text>Create Dance</Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}
