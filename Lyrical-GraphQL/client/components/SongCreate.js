import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h3>Create a new Song!</h3>
        <div> {this.state.on ? <p>yoo</p> : null} </div>

        <form action="" method="post">
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

export default SongCreate;
