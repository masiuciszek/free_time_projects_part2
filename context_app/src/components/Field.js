import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const name = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label htmlFor="name">{name}</label>
        <input type="text" />
      </div>
    );
  }
}
