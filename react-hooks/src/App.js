import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import SearchBar from './components/SearcBar';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <div className="container text-center">
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/counter" component={Counter} />
              <Route path="/searchbar" component={SearchBar} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
