import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <h4>...Loading</h4>;
    }
    return <h3>{user.name}</h3>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId),
});

export default connect(mapStateToProps)(UserHeader);
