import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Grid,
  Row,
  Button,
  Card,
  Col,
  Text,
  Toast
} from "native-base";
import { Image } from "react-native";
export const GifPicker = props => {
  const { selectGif, gifs } = props;
  console.log(gifs);
  const firstCol = gifs.slice(0, 2);
  const secondCol = gifs.slice(2, 4);
  return (
    <Grid
      style={
        {
          // flex: 1,
          // flexDirection: "row",
          // justifyContent: "space-evenly"
          // alignItems: "stretch"
        }
      }
    >
      <Row size={1}>
        {firstCol.map((gif, i) => (
          <Button key={i} onPress={selectGif}>
            <Image
              source={{ uri: gif }}
              style={{
                alignSelf: "stretch",
                padding: 10,
                width: 200,
                height: 100
                // resizeMode: "center"
                // flex: 1
                // alignItems: "stretch"
              }}
            />
          </Button>
        ))}
      </Row>
      <Row size={1}>
        {secondCol.map((gif, i) => (
          <Button key={i} onPress={selectGif}>
            <Image
              source={{ uri: gif }}
              style={{
                width: 200,
                height: 100,
                alignSelf: "stretch",
                padding: 10
                // resizeMode: "center"
                // flex: 1
                // alignItems: "stretch"
              }}
            />
          </Button>
        ))}
      </Row>
    </Grid>
  );
};

export default GifPicker;
