import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";

import axios from "axios";
import { Image, Linking } from "react-native";
import Geolocation from "react-native-geolocation-service";
require("../secrets");

const YELP_API_KEY = process.env.YELP_API_KEY;

export default class Yelp extends Component {
  constructor() {
    super();

    this.state = {
      latitude: 41.9051684,
      longitude: -87.6291557,
      results: {}
    };
    this.fetchYelpData = this.fetchYelpData.bind(this);
  }

  async componentDidMount() {
    Geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
    await this.fetchYelpData();
  }

  async fetchYelpData() {
    const api = axios.create({
      baseURL: "https://api.yelp.com/v3",
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    });
    const config = {
      params: {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        categories: "danceclubs",
        sort_by: "distance",
        limit: 5
      }
    };
    const { data } = await api.get("/businesses/search", config);
    this.setState({ results: data });
  }

  render() {
    console.log(this.state);
    return (
      <Container
        style={{
          flexDirection: "row",
          flex: 1
        }}
      >
        <Content>
          {this.state.results && this.state.results.businesses ? (
            this.state.results.businesses.map(business => (
              <Card key={business.id} style={{ flex: 1, alignItems: "center" }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: business.image_url }} />
                    <Body>
                      <Text onPress={() => Linking.openURL(business.url)}>
                        {business.name}
                      </Text>
                      {/* <Text note>April 15, 2016</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body style={{ flex: 1, alignItems: "center" }}>
                    {business.image_url ? (
                      <Image
                        source={{
                          uri: business.image_url
                        }}
                        style={{
                          width: 300,
                          height: 200,

                          flex: 1,
                          resizeMode: "stretch"
                        }}
                      />
                    ) : (
                      <Text> </Text>
                    )}
                    <Text>{business.location.address1}</Text>
                    <Text note>
                      {business.location.city}, {business.location.state}{" "}
                      {business.location.zip_code}
                    </Text>
                    <Text note>{business.phone}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: "#87838B" }}>
                      <Text>
                        {(business.distance / 5280).toFixed(2)} miles away
                      </Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </Content>
      </Container>
    );
  }
}
