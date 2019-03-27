
import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, List, ListItem } from "native-base";
import axios from 'axios'
import { Image, Linking } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
require('../secrets');

const YELP_API_KEY = process.env.YELP_API_KEY;

export default class Yelp extends Component {
    constructor() {
        super();

        this.state = {
            latitude: 41.9051684,
            longitude: -87.6291557,
            results: {}
        };
        this.fetchYelpData = this.fetchYelpData.bind(this)
    }


    async componentDidMount() {
        Geolocation.getCurrentPosition((position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        })
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
        return (
            <Container
                style={{
                    flexDirection: "row",
                    flex: 1
                }}
            >
                <Content>
                    <Card>
                        {this.state.results.businesses ? this.state.results.businesses.map(business => (
                            <CardItem key={business.id} bordered>
                                <List>
                                    <ListItem>
                                        <Image style={{ width: 100, height: null, flex: 1 }} source={{ uri: business.image_url }} />
                                    </ListItem>
                                    <ListItem>
                                        <Text style={{ color: 'blue' }}
                                            onPress={() => Linking.openURL(business.url)}>
                                            {business.name}
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>{business.location.address1}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>{business.location.city}, {business.location.state} {business.location.zip_code}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>{business.phone}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>{(business.distance / 5280).toFixed(2)} miles away</Text>
                                    </ListItem>
                                </List>
                            </CardItem>
                        )) : <Text>Loading...</Text>}
                    </Card>
                </Content>
            </Container >
        );
    }
}
