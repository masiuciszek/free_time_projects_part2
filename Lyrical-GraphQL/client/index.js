import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <div>
      <h3>Lyrical</h3>
      <SongList />
    </div>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
