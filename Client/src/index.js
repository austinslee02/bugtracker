import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

const link = createHttpLink({
  uri: "http://localhost:4000"
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const root = document.getElementById('root');

render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  root,
);