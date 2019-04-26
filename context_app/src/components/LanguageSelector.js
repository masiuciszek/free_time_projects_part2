import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div className="">
        select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguagechange('english')}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguagechange('dutch')}
        />
      </div>
    );
  }
}
