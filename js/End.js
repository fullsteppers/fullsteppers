import React from "react";
import {
  Container,
  Content,
  Text,
  Row,
  Col,
  Grid,
  StyleProvider,
  H2,
  Button
} from "native-base";
import getTheme from "../native-base-theme/components";

export const End = props => {
  const { startOver, newTrack, newDance, home, dance, song } = props;
  return (
    <StyleProvider style={getTheme()}>
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
                  </Container>
                </Container>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    </StyleProvider>
  );
};

export default End;
