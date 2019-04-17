import React, { Component } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { CtaBtn } from '../styled_componets/buttons';

class GoogleAuth extends Component {
  componentDidMount() {
    // gapi , google api
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '115897388168-817secobijemtttqeq7bhfnkevft4eqa.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); // listen an event litsiner
        });
    });
  }

  onAuthChange = isSignedIn => {
    // const { signIn, signOut } = this.props;
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      // signOut();
    } else {
      this.props.signOut();
      // signIn();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    // const { isSignedIn } = this.props;
    // if (this.props.isSignedIn === null) {
    //   return null;
    // }
    if (this.props.isSignedIn) {
      return (
        // eslint-disable-next-line react/button-has-type
        <CtaBtn google onClick={this.onSignOutClick}>
          <FaGoogle style={{ marginRight: '12px' }} size={22} />
          Sign Out
        </CtaBtn>
      );
    }
    return (
      // eslint-disable-next-line react/button-has-type
      <CtaBtn onClick={this.onSignInClick}>
        {/* <FaGoogle
          size={22}
          style={{ background: 'tomato', color: '#fefefe' }}
        /> */}
        Sign In With Google
      </CtaBtn>
    );
  }

  render() {
    return (
      <div>
        <h3>googleauth</h3>
        {this.renderAuthButton()}
      </div>
    );
  }
}
const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
