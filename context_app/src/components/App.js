import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';

export default class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div className="">
          select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        {this.state.language}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
