import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      on: false,
    };
    this.switchTxt = this.switchTxt.bind(this);
  }

  switchTxt() {
    this.setState({ on: !this.state.on });
  }

  onSubmit(e) {
    e.preventDefault();
    const { mutate } = this.props;

    // create a song
    mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query }],
    }).then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/"> Back</Link>
        <h3>Create a new Song!</h3>
        <div> {this.state.on ? <p>yoo</p> : null} </div>

        <form action="" method="post" onSubmit={this.onSubmit.bind(this)}>
          <label> Song Title:</label>
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

// Query variables and types!
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
