import React from "react";
import { Grid, Row, Button } from "native-base";
import { Image } from "react-native";

export const GifPicker = props => {
  const { selectGif, gifs, selectedGif } = props;
  const firstCol = gifs.slice(0, 2);
  const secondCol = gifs.slice(2, 4);
  return (
    <Grid>
      <Row size={1}>
        {firstCol.map((gif, i) => (
          <Button key={i} onPress={() => selectGif(i)}>
            <Image
              source={{ uri: gif }}
              style={{
                width: 200,
                height: 150,
                marginEnd: 5,
                //if this gif === selected gif, border is x
                borderWidth: gifs[i] === selectedGif ? 5 : 0,
                borderColor: "red"
              }}
            />
          </Button>
        ))}
      </Row>
      <Row size={1}>
        {secondCol.map((gif, j) => (
          <Button key={j + 2} onPress={() => selectGif(j + 2)}>
            <Image
              source={{ uri: gif }}
              style={{
                width: 200,
                height: 150,
                marginEnd: 5,
                borderWidth: gifs[j + 2] === selectedGif ? 5 : 0,
                borderColor: "red"
              }}
            />
          </Button>
        ))}
      </Row>
    </Grid>
  );
};

export default GifPicker;
