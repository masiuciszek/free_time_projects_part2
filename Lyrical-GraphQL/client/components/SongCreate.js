import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
  }

  render() {
    return (
      <div>
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

const query = gql``;

export default SongCreate;
