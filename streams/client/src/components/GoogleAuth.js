import React, { Component } from 'react';
import { FaGoogle } from 'react-icons/fa';

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange); // listen an event litsiner
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        // eslint-disable-next-line react/button-has-type
        <button
          onClick={this.onSignOutClick}
          style={{
            background: '#fe4234',
            color: '#fefefe',
            borderRadius: '3rem',
            width: '7rem',
            padding: '.7rem',
            marginTop: '10px',
            fontWeight: '800',
            fontSize: '.7rem',
          }}
        >
          <FaGoogle
            size={22}
            style={{ background: 'tomato', color: '#fefefe' }}
          />
          Sign Out
        </button>
      );
    }
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        onClick={this.onSignInClick}
        className="sign-out-btn cta"
        style={{ background: 'tomato', color: '#fefefe', borderRadius: '3rem' }}
      >
        <FaGoogle
          size={22}
          style={{
            background: '#fe4234',
            color: '#fefefe',
            borderRadius: '3rem',
            width: '7rem',
            padding: '.7rem',
            marginTop: '10px',
            fontWeight: '800',
            fontSize: '.7rem',
          }}
        />
        Sign in
      </button>
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
