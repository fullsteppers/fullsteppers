import React from "react";
import Routes from "./js/Routes";
import getTheme from "./native-base-theme/components";
import { Root, StyleProvider } from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <StyleProvider style={getTheme()}>
          <Routes />
        </StyleProvider>
      </Root>
    );
  }
}
