import React, { Component } from 'react';

const Context = React.createContext('english');

export class LanguageStore extends Component {
  state = { language: 'english' };

  onLanguagechange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div>
        <Context.Provider
          value={{ ...this.state, onLanguagechange: this.onLanguagechange }}
        >
          {/* all the componets inside will have acces to this context */}
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export default Context;
