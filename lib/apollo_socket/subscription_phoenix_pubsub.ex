defmodule ApolloSocket.Subscription.PhoenixPubSub do
  defmacro __using__(opts) do
    pubsub = Keyword.get(opts, :pubsub) || raise """
    ApolloSocket.Subscription.PhoenixPubSub requires the process id or process name of a Phoenix.PubSub instance
    """

    quote do
      @behaviour Absinthe.Subscription.Pubsub 
      
      def subscribe(topic) do
        ApolloSocket.Subscription.PhoenixPubSub.subscribe(unquote(pubsub), topic)
      end

      def publish_mutation(topic, mutation_result, subscribed_fields) do
        ApolloSocket.Subscription.PhoenixPubSub.publish_mutation(
          unquote(pubsub), 
          topic, 
          mutation_result, 
          subscribed_fields
        )
      end

      def publish_subscription(topic, data) do
        ApolloSocket.Subscription.PhoenixPubSub.publish_subscription(unquote(pubsub), topic, data)
      end

      @impl Absinthe.Subscription.Pubsub 
    end
  end

  def subscribe(phoenix_pubsub, topic) do
    Phoenix.PubSub.subscribe(phoenix_pubsub, topic)
  end

  def publish_mutation(phoenix_pubsub, topic, mutation_result, subscribed_fields) do
    message = %{
      node: node(),
      subscribed_fields: subscribed_fields,
      mutation_result: mutation_result
    }

    Phoenix.PubSub.broadcast(phoenix_pubsub, topic, message)
  end

  def publish_subscription(phoenix_pubsub, topic, result) do
    message = %{
      topic: topic,
      event: "subscription:data",
      payload: %{result: result, subscriptionId: topic}
    }

    Phoenix.PubSub.broadcast(phoenix_pubsub, topic, message)
  end
end