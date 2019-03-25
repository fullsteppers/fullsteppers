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
    Picker,
} from "native-base";

export default class SelectStanceWidth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timing: 1,
        };
        this.submitTiming = this.submitTiming.bind(this);
    }

    submitTiming() {
        const timing = this.state.value;
        const stance = this.props.stance;
        const dance = this.props.dance;
        const song = this.props.song;
        Actions.DisplayAr({ dance, song, stance, timing });
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
                            <Text>Choose your dance speed...</Text>
                        </CardItem>

                        <Picker
                            selectedValue={this.state.timing}
                            onValueChange={async val => {
                                await this.setState({ timing: val });
                            }}
                        >
                            <Picker.Item label={'Half-Time (Slow)'} value={0.5} />
                            <Picker.Item label={'Normal Time'} value={1.0} />
                            <Picker.Item label={'Double-Time (Fast'} value={2.0} />

                        </Picker>
                        <Text>
                            Speed: {this.state.timing.toFixed(2)}
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
                                title="Select Dance Speed"
                                onPress={this.submitTiming}
                            >
                                <Text>Start Dancing!</Text>
                            </Button>
                        </Container>
                    </Card>
                </Container>
            </StyleProvider >
        );
    }
}
