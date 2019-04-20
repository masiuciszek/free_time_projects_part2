import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    const { data } = this.props;
    return data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }

  render() {
    const { data } = this.props;
    if (data.loading) return <div>...Loading</div>;
    console.log(this.props);
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
