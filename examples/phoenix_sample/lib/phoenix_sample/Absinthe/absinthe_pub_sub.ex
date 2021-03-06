defmodule PhoenixSample.Absinthe.PubSub do
  @moduledoc """
    Absinthe needs a PubSub system that is pinged every time the target
    of a subscription changes.  This module implements Absinthe's subscription
    protocol and sends messages on the Phoenix App's PubSub instance.
  """

  @behaviour Absinthe.Subscription.Pubsub

  @impl true
  def node_name() do
    "PhoenixSampleNode"
  end

  @impl true
  def subscribe(topic) do
    Phoenix.PubSub.subscribe(PhoenixSample.PubSub, topic)
  end

  @impl true
  def publish_mutation(
        proxy_topic,
        mutation_result,
        subscribed_fields
      ) do
    Phoenix.PubSub.broadcast(
      PhoenixSample.PubSub,
      proxy_topic,
      %{node: node(), mutation_result: mutation_result, subscribed_fields: subscribed_fields}
    )
  end

  @impl true
  def publish_subscription(topic, data) do
    Phoenix.PubSub.broadcast(PhoenixSample.PubSub, topic, data)
  end
end
