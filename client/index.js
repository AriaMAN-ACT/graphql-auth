import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';

import App from "./components/App";

const apolloClient = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache(),
    dataIdFromObject: ({id}) => id
});

const Root = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <App/>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));
