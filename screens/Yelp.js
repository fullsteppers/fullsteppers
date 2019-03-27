const API_KEY =
  "79UdJi606H6uVeVo37lCQyY11pjE-l48TFbJ0WDaSOXGz_paloEiRxmpwmTZA_sczUWPLrNRit7nQ9HyVC6r94H6s-YojwAxrZlOQU9Z831V2oFPBe5TnCOPLzmZXHYx";

import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  List,
  ListItem
} from "native-base";
import axios from "axios";
require("../secrets");
const YELP_API_KEY = process.env.YELP_API_KEY;

export default class Yelp extends React.Component {
  constructor() {
    super();

    this.state = {
      position: {
        latitude: 41.9051684,
        longitude: -87.6291557
      },
      results: {}
    };
    this.fetchYelpData = this.fetchYelpData.bind(this);
    // this.getLocation = this.getLocation.bind(this)
  }

  // getLocation() {
  //     return new Promise((resolve, reject) => {
  //         navigator.geolocation.getCurrentPosition(
  //             position => {
  //                 let newOrigin = {
  //                     latitude: position.coords.latitude,
  //                     longitude: position.coords.longitude,
  //                 };
  //                 config.params.latitude = newOrigin.latitude;
  //                 config.params.longitude = newOrigin.longitude;
  //             }
  //         )
  //     })
  // }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      position => {
        let newOrigin = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.setState({ position: newOrigin });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
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
        latitude: this.state.position.latitude,
        longitude: this.state.position.longitude,
        categories: "danceclubs",
        sort_by: "distance",
        limit: 5
      }
    };
    const { data } = await api.get("/businesses/search", config);
    this.setState({ results: data });
  }

  render() {
    let keys = Object.keys(this.state.results);

    return (
      <Container
        style={{
          flexDirection: "row",
          flex: 1
        }}
      >
        <Content>
          <Card>
            {this.state.results.businesses ? (
              this.state.results.businesses.map(business => (
                <CardItem key={business.id} bordered>
                  <List>
                    <ListItem>
                      <Text>{business.name}</Text>
                    </ListItem>
                    <ListItem>
                      <Text>{business.location.display_address}</Text>
                    </ListItem>
                    <ListItem>
                      <Text>{business.phone}</Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        {(business.distance / 5280).toFixed(2)} miles away
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>{business.price}</Text>
                    </ListItem>
                  </List>
                </CardItem>
              ))
            ) : (
              <Text>Loading...</Text>
            )}
          </Card>
        </Content>
      </Container>
    );
  }
}
