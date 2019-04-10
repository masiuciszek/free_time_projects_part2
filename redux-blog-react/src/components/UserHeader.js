import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId); // from the postlist props
  }

  render() {
    return <h3>userheader</h3>;
  }
}

export default connect(
  null,
  { fetchUser }
)(UserHeader);
