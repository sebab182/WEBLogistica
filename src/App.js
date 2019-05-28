import React from "react";

import { MemoryRouter as Router } from "react-router-dom";

import { AppContainer, Navigation, Title } from "./containers";

import { RenderItems2 } from "./RenderItems2";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Navigation>
          <Title> MENU </Title>
          <RenderItems2 />
        </Navigation>
        
      </AppContainer>
    );
  }
}

export const createApp = () => {
  return class SideNavApp extends React.Component {
    render() {
      return (
        <Router>
          <App />
        </Router>
      );
    }
  };
};
