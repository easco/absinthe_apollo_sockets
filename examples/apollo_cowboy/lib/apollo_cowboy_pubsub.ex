defmodule ApolloCowboyExample.AbsinthePubSub do
  use ApolloSocket.Subscription.PhoenixPubSub, pubsub: ApolloCowboyExample.PubSub
end