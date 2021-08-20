defmodule ApolloSocket.AbsinthePubSub do
  @moduledoc """
  Absinthe needs a PubSub system that is pinged every time the target
  of a subscription changes. This module implements Absinthe's subscription
  protocol on top of a Phoenix PubSub instance.

  To set things up, in your application's supervision tree, include
  a Phoenix PubSub server module with an app-specific name, and
  an app module that you will define to handle the Absinthe subscriptions:

  ```
  defmodule MyApp.Application do
    # See https://hexdocs.pm/elixir/Application.html
    # for more information on OTP Applications
    @moduledoc false

    use Application

    def start(_mode, _args) do
      ...
      children = [
        {Phoenix.PubSub, name: MyApp.PubSub},
        {Absinthe.Subscription, MyApp.Absinthe.PubSub},
        ... other worker and supervisor modules
      ]
      ...
    end
  end
  ```

  Now define the `MyApp.Absinthe.PubSub` module by include this
  module's implementation. Specify your app in the `otp_app`
  option and the name of the `Phoenix.PubSub` server in the
  `pubsub_server` option:

  ```
  defmodule MyApp.Absinthe.PubSub do

  use ApolloSocket.AbsinthePubSub,
    otp_app: :my_app,
    pubsub_server: MyApp.PubSub
  end
  ```
  """

  defmacro __using__(opts) do
    otp_app = Keyword.fetch!(opts, :otp_app)
    pubsub = Keyword.fetch!(opts, :pubsub_server)

    quote do
      @behaviour Absinthe.Subscription.Pubsub

      @impl true
      def node_name() do
        ApolloSocket.AbsinthePubSub.node_name(unquote(otp_app))
      end

      @impl true
      def subscribe(topic) do
        ApolloSocket.AbsinthePubSub.subscribe(unquote(pubsub), topic)
      end

      @impl true
      def publish_mutation(topic, mutation_result, subscribed_fields) do
        ApolloSocket.AbsinthePubSub.publish_mutation(
          unquote(pubsub),
          topic,
          mutation_result,
          subscribed_fields
        )
      end

      @impl true
      def publish_subscription(topic, data) do
        ApolloSocket.AbsinthePubSub.publish_subscription(unquote(pubsub), topic, data)
      end

      def unsubscribe(topic) do
        ApolloSocket.AbsinthePubSub.unsubscribe(unquote(pubsub), topic)
      end
    end
  end

  def node_name(otp_app) do
    otp_app_name =
      otp_app
      |> Atom.to_string()
      |> Macro.camelize()
    otp_app_name <> "ApolloNode"
  end

  def subscribe(pubsub, topic) do
    Phoenix.PubSub.subscribe(pubsub, topic)
  end

  def publish_mutation(
        pubsub,
        topic,
        mutation_result,
        subscribed_fields
      ) do
    Phoenix.PubSub.broadcast(
      pubsub,
      topic,
      %{node: node(), mutation_result: mutation_result, subscribed_fields: subscribed_fields}
    )
  end

  def publish_subscription(pubsub, topic, data) do
    Phoenix.PubSub.broadcast(pubsub, topic, data)
  end

  @doc """
  Unsubscribe from a topic.
  """
  def unsubscribe(pubsub, topic) do
    Phoenix.PubSub.unsubscribe(pubsub, topic)
  end
end
