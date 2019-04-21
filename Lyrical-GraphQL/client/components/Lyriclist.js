import React, { Component } from 'react';

class Lyriclist extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
      </li>
    ));
  }

  render() {
    return <ul className="collection">Lyriclist</ul>;
  }
}

export default Lyriclist;
