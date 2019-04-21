import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import LyricCreate from './LyricCreate';
import LyrickList from './Lyriclist';

class SongDetails extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>...Loading</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyrickList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

const fetchSong = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

// query
export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetails);
