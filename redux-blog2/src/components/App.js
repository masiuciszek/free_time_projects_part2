import React, { Component } from 'react';
import PostList from './PostList';
import '../app.css';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <PostList />
      </div>
    );
  }
}

// "eslintConfig": {
//   "extends": "react-app"
// },
