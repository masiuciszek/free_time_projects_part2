import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import NotFound from './NotFound';
import history from '../history';
import ModalBox from './Modal';

const ClearFix = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: 2rem;
`;

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <ClearFix>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/modal" component={ModalBox} />
          </ClearFix>
        </Switch>
        <Route component={NotFound} />
      </div>
    </Router>
  </div>
);

export default App;
