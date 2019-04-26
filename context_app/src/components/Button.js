import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColourContext from '../context/ColourContext';

export default class Button extends Component {
  renderLanguage(value) {
    return value === 'english' ? 'Submit ' : 'Vorlhoggeen';
  }

  renderBtn(colour) {
    return (
      <button className={`ui button ${colour}`} type="button">
        <LanguageContext.Consumer>
          {value => this.renderLanguage(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColourContext.Consumer>
        {colour => this.renderBtn(colour)}
      </ColourContext.Consumer>
    );
  }
}

// ui button primary
