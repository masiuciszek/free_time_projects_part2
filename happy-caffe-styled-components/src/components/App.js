import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { DangerButton, SuccessButton } from './Buttons';
import Form from './Form';
import { RedTheme, GreenTheme } from './Themes';

class App extends Component {
  state = {
    theme: RedTheme,
  };

  myRef = React.createRef();

  setRedTheme = () => {
    this.setState({
      theme: RedTheme,
    });
  };

  setGreenTheme = () => {
    this.setState({
      theme: GreenTheme,
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <SuccessButton onClick={this.setGreenTheme}>Success</SuccessButton>
          <DangerButton onClick={this.setRedTheme}>Danger</DangerButton>
          <Form myRef={this.myRef} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
