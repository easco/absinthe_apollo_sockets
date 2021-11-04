
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql
} from '@apollo/client/core';

import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const GRAPHQL_SUBSCRIPTIONS_ENDPOINT = "ws://localhost:8080/socket/websocket"

const subscriptionClient = new SubscriptionClient(GRAPHQL_SUBSCRIPTIONS_ENDPOINT, {
  reconnect: true
});

const link = new WebSocketLink(subscriptionClient);
const cache = new InMemoryCache()
window.apolloClient = new ApolloClient({
    cache,
    link
});

let counterValues = window.apolloClient.subscribe({
  query: gql`
    subscription {
      counter(id: "first") {
        id, value
      }
    }
  `
})

let subscription = counterValues.subscribe({
  next(value) { 
    console.log(value)
    const valueContainer = document.getElementById("counterValue")
    if(valueContainer) {
      valueContainer.innerText = String(value.data.counter.value)
    }
  },
  error(err) { console.log(`Finished with error: ${err}`) },
  complete() { console.log('Finished') }
})

function incrementCounter() {
  window.apolloClient.mutate({
    mutation: gql`
    mutation {
      increment_counter(id: "first") {
        value
      }
    }
  `})
}

window.addEventListener('load', function () {
  let incrementButton = document.getElementById("increment")
  if (incrementButton) {
    incrementButton.onclick = incrementCounter
  } else {
    console.log("Could not find the button.")
  }

  let disconnectButton = document.getElementById("disconnect")
  if (disconnectButton) {
    disconnectButton.onclick = () => {
      subscription.unsubscribe()
      subscription = null
    }
  } else {
    console.log("Could not find the disconnectButton.")
  }

})