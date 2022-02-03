import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

console.info('all env properties', process.env);
console.info('SERVER_URI', process.env.SERVER_URI);

const client = new ApolloClient({
  uri: process.env.SERVER_URI || 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

ReactDOM.render(

  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
