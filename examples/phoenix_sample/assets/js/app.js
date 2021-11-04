// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

import { 
  ApolloClient, 
  HttpLink, 
  InMemoryCache, 
  gql } from '@apollo/client/core';

import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const GRAPHQL_ENDPOINT = 'ws://localhost:4000/socket/apollo_socket';

const wsLink = new WebSocketLink({
  uri: GRAPHQL_ENDPOINT,
  options: {
    reconnect: true
  }
});

const apolloClient = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache()
});

//Subscribe to the value of the "first" counter
const mySubscription = apolloClient.subscribe({
  query: gql`
    subscription {
      counter(id: "first") {
        id, value
      }
    }
  `
})

// when a new value arrives, log it
mySubscription.subscribe({
  next: (value) => { console.log("The new value is " + String(value.data.counter.value)) }
})

// increment the counter
for(var i = 0; i < 5; i++) {
  apolloClient.mutate({
    mutation: gql`
      mutation {
        increment_counter(id: "first") {
          value
        }
      }
    `})
}
