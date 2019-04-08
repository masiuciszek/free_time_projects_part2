import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Postlist extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Postlist</div>;
  }
}

export default connect(
  null,
  { fetchPosts }
)(Postlist);
