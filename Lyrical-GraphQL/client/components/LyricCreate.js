import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId,
        },
      })
      .then(() => this.setState({ content: '' }));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="">Add a Lyric</label>
          <input
            type="text"
            value={this.state.content}
            name="content"
            onChange={e => this.setState({ content: e.target.value })}
          />
        </form>
        <p>{this.state.content} </p>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
