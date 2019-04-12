import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import NotFound from './NotFound';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/stream/new" component={StreamCreate} />
              <Route path="/stream/edit" component={StreamEdit} />
              <Route path="/stream/delete" component={StreamDelete} />
              <Route path="/stream/show" component={StreamShow} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
