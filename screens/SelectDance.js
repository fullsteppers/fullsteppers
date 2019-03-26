import React from "react";
import { Actions } from "react-native-router-flux";
import { Picker, Image } from "react-native";
import { makeRef } from "./../js/firebase";
import { Container, Card, CardItem, Text, Button, Body } from "native-base";
import * as firebase from "firebase";

export default class SelectDance extends React.Component {
  constructor() {
    super();

    this.state = {
      dance: "foxtrot",
      allDances: [],
      userDances: [],
      waltz: {}
    };
    this.submitDance = this.submitDance.bind(this);
  }

  async componentDidMount() {
    this.allDancesRef = makeRef(`/dances`);
    let allDances = {};
    allDances = await this.allDancesRef
      .once("value")
      .then(snapshot => snapshot.val());

    this.userDancesRef = makeRef(
      `users/${firebase.auth().currentUser.uid}/dances`
    );
    let userDances = {};
    userDances = await this.userDancesRef
      .once("value")
      .then(snapshot => snapshot.val());
    if (userDances) {
      allDancesObj = Object.assign(allDances, userDances);
      this.setState({
        allDances: allDancesObj
      });
    } else {
      this.setState({
        allDances: allDances
      });
    }
  }

  submitDance() {
    const dance = this.state.dance;
    Actions.SelectSong({ dance });
  }

  render() {
    const dances = Object.keys(this.state.allDances);
    const selected = this.state.dance;
    const selectedObj = this.state.allDances[selected];
    const blurb = selectedObj ? selectedObj.blurb : "";
    const gif = selectedObj ? selectedObj.gif : "";
    console.log(selectedObj);
    console.log(gif);
    return (
      <Container
        style={{
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Card transparent>
          <CardItem style={{ alignSelf: "center" }}>
            <Text>Choose your dance...</Text>
          </CardItem>
          <Picker
            selectedValue={this.state.dance}
            onValueChange={async val => {
              await this.setState({ dance: val });
            }}
          >
            {dances.map(dance => (
              <Picker.Item key={dance} label={dance} value={dance} />
            ))}
          </Picker>
          <Image
            source={{
              uri: gif
            }}
            style={{ resizeMode: "center", flex: 1 }}
          />

          <CardItem>
            <Text style={{ fontSize: 20 }}>{blurb}</Text>
          </CardItem>
          <Container
            style={{
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Button light title="Select Dance" onPress={this.submitDance}>
              <Text>Do the {this.state.dance}</Text>
            </Button>
          </Container>
        </Card>
      </Container>
    );
  }
}

//"The foxtrot is a smooth, progressive dance characterized by long, continuous flowing movements across the dance floor. In the mid-seventies, disco's rising popularity inspired a 'discofox' derivation of the foxtrot."

//https://i.gifer.com/7SRX.gif

// "The waltz is a ballroom and folk dance performed primarily in closed position. It scandalized aristocrats in the late 18th century; a 1771 von La Roche novel calls it 'the shameless, indecent whirling dance of the Germans.'";

//"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Phenakistoscope_3g07690d.gif/440px-Phenakistoscope_3g07690d.gif"

// "Salsa is a popular form of social dance originating from Cuban folk dances. The movements of Salsa are a combination of the Afro-Cuban dances Son, cha-cha-cha, Mambo, Rumba, and the Danzón.";

//http://cdn.teamcococdn.com/file/cedricdance2-5b05ec0dd3dcc.gif

//
