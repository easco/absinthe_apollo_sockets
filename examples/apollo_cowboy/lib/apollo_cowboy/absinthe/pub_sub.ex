defmodule ApolloCowboyExample.Absinthe.PubSub do
  @moduledoc """
    Absinthe needs a PubSub system that is pinged every time the target
    of a subscription changes.  This module implements Absinthe's subscription
    protocol on top of a Phoenix PubSub instance.
  """

  @behaviour Absinthe.Subscription.Pubsub

  # TODO: Migrate this module into the ApolloSocket library
  # with a __using__ macro to make it reusable, with these required options:
  @pub_sub_module ApolloCowboyExample.PubSub
  @node_name "ApolloCowboyExampleNode"

  @impl true
  def node_name() do
    @node_name
  end

  @impl true
  def subscribe(topic) do
    Phoenix.PubSub.subscribe(@pub_sub_module, topic)
  end

  @impl true
  def publish_mutation(
        proxy_topic,
        mutation_result,
        subscribed_fields
      ) do
    Phoenix.PubSub.broadcast(
      @pub_sub_module,
      proxy_topic,
      %{node: node(), mutation_result: mutation_result, subscribed_fields: subscribed_fields}
    )
  end

  @impl true
  def publish_subscription(topic, data) do
    Phoenix.PubSub.broadcast(@pub_sub_module, topic, data)
  end

  @doc """
  Unsubscribe from a topic.
  """
  def unsubscribe(topic) do
    Phoenix.PubSub.unsubscribe(@pub_sub_module, topic)
  end
end
