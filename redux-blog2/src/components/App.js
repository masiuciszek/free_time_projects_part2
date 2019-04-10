import React, { Component } from 'react';
import PostList from './PostList';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>App</h1>
        <p>app brate</p>
        <PostList />
      </div>
    );
  }
}

// "eslintConfig": {
//   "extends": "react-app"
// },
