import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Button extends Component {
  renderLanguage(value) {
    return value === 'english' ? 'Submit ' : 'Vorlhoggeen';
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderLanguage(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

// ui button primary
