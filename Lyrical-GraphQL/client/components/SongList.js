import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {
    // call the out delete mutation
    // const { mutate } = this.props;
    // this.props.mutate({ variables: { id } });
    console.log(this.props.mutate);
  }

  renderSongs() {
    const { data } = this.props;
    return data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i className="material-icons" onClick={() => this.onSongDelete(id)}>
          delete
        </i>
      </li>
    ));
  }

  render() {
    console.log(this.props);
    const { data } = this.props;
    if (data.loading) return <div>...Loading</div>;
    console.log(this.props);
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

// pritise the mutation and invoke it with the query getchsongs

export default graphql(mutation)(graphql(query)(SongList));
