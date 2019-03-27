import React from "react";
import {
  Container,
  Content,
  Text,
  Row,
  Col,
  Grid,
  H2,
  Button
} from "native-base";

const End = props => {
  const { startOver, newTrack, newDance, home, fetchYelp, dance, song } = props;
  return (
    <Container
      style={
        {
          // flexDirection: "column"
          // justifyContent: "center"
        }
      }
    >
      <Content>
        <Grid>
          <Row size={1}>
            <H2
              style={{
                margin: 50
              }}
            >
              You just did the {dance} to the song {song}. Want to go again?
            </H2>
          </Row>
          <Row
            size={1}
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "space-between",
              alignSelf: "center"
            }}
          >
            <Button light block title="Start Over" onPress={startOver}>
              <Text>Start Over</Text>
            </Button>
            <Button light block title="Pick a New Track" onPress={newTrack}>
              <Text>Pick a New Track</Text>
            </Button>
            <Button light block title="Pick a New Dance" onPress={newDance}>
              <Text>Pick a New Dance</Text>
            </Button>
            <Button light block title="Home" onPress={home}>
              <Text>Home</Text>
            </Button>
            <Button
              light
              block
              title="Find Places to Dance"
              onPress={fetchYelp}
            >
              <Text>Find Places to Dance</Text>
            </Button>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default End;
