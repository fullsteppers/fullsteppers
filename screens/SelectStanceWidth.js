import React from "react";
import { Actions } from "react-native-router-flux";
import getTheme from "../native-base-theme/components";
// import { makeRef } from "./../js/firebase";
import {
    Container,
    Card,
    CardItem,
    Text,
    StyleProvider,
    Button,
} from "native-base";

import Slider from "react-native-slider"

export default class SelectStanceWidth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0.3,
        };
        this.submitStance = this.submitStance.bind(this);
    }

    submitStance() {
        const stance = this.state.value;
        const dance = this.props.dance;
        const song = this.props.song;
        Actions.SelectTiming({ dance, song, stance });
    }

    render() {
        return (
            <StyleProvider style={getTheme()}>
                <Container
                    style={{
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    <Card transparent>
                        <CardItem
                            style={{
                                paddingTop: 50
                            }}
                        >
                            <Text>Choose your stance width...</Text>
                        </CardItem>

                        <Slider
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}
                        />
                        <Text>
                            Value: {this.state.value.toFixed(2)}
                        </Text>
                        <Container
                            style={{
                                flexDirection: "row",
                                justifyContent: "center"
                            }}
                        >
                            <Button
                                light
                                vertical
                                title="Select Stance"
                                onPress={this.submitStance}
                            >
                                <Text>Select Stance</Text>
                            </Button>
                        </Container>
                    </Card>
                </Container>
            </StyleProvider >
        );
    }
}
