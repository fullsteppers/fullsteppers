import React from "react";
import { Container, Content, Text, Button } from "native-base";

const End = props => {
  const { startOver, newTrack, newDance, home, fetchYelp, dance, song } = props;
  return (
    <Container>
      <Content
        style={{
          alignSelf: "center",
          margin: 40
        }}
      >
        <Text>
          You just did the {dance} to the song {song}. Want to go again?
        </Text>
        <Button
          light
          block
          style={{ margin: 10 }}
          title="Start Over"
          onPress={startOver}
        >
          <Text>Start Over</Text>
        </Button>
        <Button
          light
          block
          style={{ margin: 10 }}
          title="Pick a New Track"
          onPress={newTrack}
        >
          <Text>Pick a New Track</Text>
        </Button>
        <Button
          light
          block
          style={{ margin: 10 }}
          title="Pick a New Dance"
          onPress={newDance}
        >
          <Text>Pick a New Dance</Text>
        </Button>
        <Button light block style={{ margin: 5 }} title="Home" onPress={home}>
          <Text>Home</Text>
        </Button>
        <Button
          light
          block
          style={{ margin: 10 }}
          title="Find Places to Dance"
          onPress={fetchYelp}
        >
          <Text>Find Places to Dance</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default End;
