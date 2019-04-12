import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import NotFound from './NotFound';

const pageOne = () => (
  <div>
    <h3>pagone</h3>
    <Link to="/pagetwo"> To the page two</Link>
  </div>
);
const pageTwo = () => (
  <div>
    <h3>pagTwo</h3> <Link to="/"> to Page one </Link>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={pageOne} />
              <Route path="/pagetwo" component={pageTwo} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
