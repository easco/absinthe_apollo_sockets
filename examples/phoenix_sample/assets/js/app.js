// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

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

import ApolloClient from 'apollo-client'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import gql from 'graphql-tag'

const GRAPHQL_SUBSCRIPTIONS_ENDPOINT = "ws://localhost:4000/socket/apollo_socket"

const subscriptionClient = new SubscriptionClient(GRAPHQL_SUBSCRIPTIONS_ENDPOINT, {
  reconnect: true
});

const link = new WebSocketLink(subscriptionClient);
const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link
});

// Subscribe to the value of the "first" counter
const mySubscription = client.subscribe({
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
  client.mutate({
    mutation: gql`
      mutation {
        increment_counter(id: "first") {
          value
        }
      }
    `})
}
