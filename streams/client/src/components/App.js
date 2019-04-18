import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import NotFound from './NotFound';
import Header from './Header';
import createBrowserHistory from '../history';
// import history from '../history';

const ClearFix = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: 2rem;
`;

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={createBrowserHistory}>
          <div>
            <Header />
            <Switch>
              <ClearFix>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" component={StreamCreate} />
                <Route path="/streams/edit:/id" component={StreamEdit} />
                <Route path="/streams/delete" component={StreamDelete} />
                <Route path="/streams/show" component={StreamShow} />
              </ClearFix>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
