defmodule PhoenixSample.Absinthe.PubSub do
  @moduledoc """
    Absinthe needs a PubSub system that is pinged every time the target
    of a subscription changes. Use the implementation in the
    `ApolloSocket.AbsinthePubSub` module.

    Specify the two required options:
    * :otp_app - the application id
    * :pubsub_server - the name of the Phoenix.PubSub server that
      is started in your application's supervision tree.
  """
  use ApolloSocket.AbsinthePubSub,
    otp_app: :phoenix_sample,
    pubsub_server: PhoenixSample.PubSub
end
