defmodule ApolloCowboyExample.Absinthe.PubSub do
  @moduledoc """
    Absinthe needs a PubSub system that is pinged every time the target
    of a subscription changes.  This module implements Absinthe's subscription
    protocol on top of a Phoenix PubSub instance.
  """

  @behaviour Absinthe.Subscription.Pubsub

  @impl true
  def subscribe(topic) do
    Phoenix.PubSub.subscribe(ApolloCowboyExample.PubSub, topic)
  end

  @impl true
  def publish_mutation(
        proxy_topic,
        mutation_result,
        subscribed_fields
      ) do
    Phoenix.PubSub.broadcast(
      ApolloCowboyExample.PubSub,
      proxy_topic,
      %{node: node(), mutation_result: mutation_result, subscribed_fields: subscribed_fields}
    )
  end

  @impl true
  def publish_subscription(topic, data) do
    Phoenix.PubSub.broadcast(ApolloCowboyExample.PubSub, topic, data)
  end
end
