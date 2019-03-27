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



const End = (props) => {

  const { startOver, newTrack, newDance, home, fetchYelp, dance, song } = props;
  return (
    <Container
      style={{
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Content>
        <Grid style={{ alignItems: "center" }}>
          <Row size={1}>
            <H2
              style={{
                margin: 50
              }}
            >
              You just did the {dance} to the song {song}. Want to go again?
              </H2>
          </Row>
          <Row size={3}>
            <Col
              style={{
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Container
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignSelf: "center",
                  alignItems: "center"
                }}
              >
                <Container
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center"
                  }}
                >
                  <Container>
                    <Button light title="Start Over" onPress={startOver}>
                      <Text>Start Over</Text>
                    </Button>
                    <Button light title="Pick a New Track" onPress={newTrack}>
                      <Text>Pick a New Track</Text>
                    </Button>
                    <Button light title="Pick a New Dance" onPress={newDance}>
                      <Text>Pick a New Dance</Text>
                    </Button>
                    <Button light title="Home" onPress={home}>
                      <Text>Home</Text>
                    </Button>
                    <Button light title="Find Places to Dance" onPress={fetchYelp}>
                      <Text>Find Places to Dance</Text>
                    </Button>
                  </Container>
                </Container>
              </Container>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
}

export default End;
