defmodule PhoenixSample.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # This is the supervisor that provides a set of counters in the schema
      PhoenixSample.Counter,

      # Start the Telemetry supervisor
      PhoenixSampleWeb.Telemetry,

      # Start the PubSub system
      {Phoenix.PubSub, name: PhoenixSample.PubSub},

      # Start and Absinthe Subscription pointed at our adapter module
      # that translates from Absinthe related notifications to
      # the Phoenix PubSub system started above
      {Absinthe.Subscription, PhoenixSample.Absinthe.PubSub},

      # When a subscription is created we create an intermediary process that
      # translates from the Absinthe PubSub to the Apollo socket protocol
      # This supervisor watches those subscriptions.
      {DynamicSupervisor, strategy: :one_for_one, name: PhoenixSample.BrokerSupervisor},

      # Start the Endpoint (http/https)
      PhoenixSampleWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: PhoenixSample.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    PhoenixSampleWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
