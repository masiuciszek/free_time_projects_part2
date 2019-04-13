import React, { Component } from 'react';

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

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    }
    if (this.state.isSignedIn) {
      return <div>I am signed in</div>;
    }
    return <div>I am not signed in</div>;
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
