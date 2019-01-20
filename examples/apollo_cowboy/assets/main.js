
import ApolloClient from 'apollo-client'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import gql from 'graphql-tag'

const GRAPHQL_SUBSCRIPTIONS_ENDPOINT = "ws://localhost:8080/socket/websocket"

const subscriptionClient = new SubscriptionClient(GRAPHQL_SUBSCRIPTIONS_ENDPOINT, {
  reconnect: true
});

const link = new WebSocketLink(subscriptionClient);
const cache = new InMemoryCache()

const client = new ApolloClient({
    cache,
    link
});

const mySubscription = client.subscribe({
  query: gql`
    subscription {
      counter(id: "first") {
        id, value
      }
    }
  `
}).then((value) => {console.log("New counter value" + value.toString())})

// mySubscription.subscribe({
//   next: (value) => {console.log("New counter value" + value.toString())}
// })
