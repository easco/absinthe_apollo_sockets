# Adapted from https://github.com/absinthe-graphql/absinthe_phoenix/blob/86e77a1ec23043557e89997da04a445ac4d7e5c3/lib/absinthe/phoenix/endpoint.ex

defmodule ApolloSocket.Phoenix.Endpoint do
  defmacro __using__(_) do
    quote do
      @behaviour Absinthe.Subscription.Pubsub
      @before_compile unquote(__MODULE__)
    end
  end

  defmacro __before_compile__(_) do
    quote do
      def node_name() do
        ApolloSocket.Phoenix.Endpoint.node_name(@otp_app, __MODULE__)
      end
      def publish_mutation(topic, mutation_result, subscribed_fields) do
        ApolloSocket.Phoenix.Endpoint.publish_mutation(@otp_app, __MODULE__, topic, mutation_result, subscribed_fields)
      end
      def publish_subscription(topic, data) do
        ApolloSocket.Phoenix.Endpoint.publish_subscription(@otp_app, __MODULE__, topic, data)
      end
    end
  end

  @doc false
  def node_name(otp_app, endpoint) do
    pubsub = pubsub(otp_app, endpoint)

    Phoenix.PubSub.node_name(pubsub)
  end

  @doc false
  def publish_subscription(otp_app, endpoint, topic, result) do
    pubsub = pubsub(otp_app, endpoint)
    Phoenix.PubSub.broadcast(pubsub, topic, result)
  end

  @doc false
  def publish_mutation(otp_app, endpoint, proxy_topic, mutation_result, subscribed_fields) do
    pubsub = pubsub(otp_app, endpoint)

    message = %{
      node: node_name(otp_app, endpoint),
      subscribed_fields: subscribed_fields,
      mutation_result: mutation_result,
    }

    Phoenix.PubSub.broadcast(pubsub, proxy_topic, message)
  end

  defp pubsub(otp_app, endpoint) do
    Application.get_env(otp_app, endpoint)[:pubsub][:name] || raise """
    Pubsub needs to be configured for #{inspect otp_app} #{inspect endpoint}!
    """
  end
end

