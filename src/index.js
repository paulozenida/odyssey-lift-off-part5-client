import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

console.info('current env is', process.env.NODE_ENV);
const uri = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' :
    'https://client-castronauts-pz.herokuapp.com/';
const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <GlobalStyles/>
        <Pages/>
    </ApolloProvider>,
    document.getElementById('root')
);
