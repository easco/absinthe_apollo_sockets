defmodule ApolloCowboyExample.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_mode, _args) do
    # Define the router for cowboy that includes a socket handler
    # for the apollo sockets and a couple of static handlers
    # that serve up the example website.
    dispatch =
      :cowboy_router.compile([
        {:_,
         [
           {"/", :cowboy_static, {:priv_file, :apollo_cowboy, "static/index.html"}},
           {"/socket/websocket", ApolloSocket.CowboySocketHandler,
            {
              ApolloSocket.AbsintheMessageHandler,
              schema: ApolloCowboyExample.Schema,
              pubsub: ApolloCowboyExample.Absinthe.PubSub,
              broker_sup: ApolloCowboyExample.BrokerSupervisor
            }},
           {"/[...]", :cowboy_static, {:priv_dir, :apollo_cowboy, "static"}}
         ]}
      ])

    children = [
      # This is the supervisor that provides a set of counters in the schema
      ApolloCowboyExample.Counter,

      # Absinthe uses a PubSub system to handle subscriptions.
      # Ours is built on top of Phoenix PubSub so we create that
      {Phoenix.PubSub, name: ApolloCowboyExample.PubSub},

      # This is the Absinthe PubSub that makes use of the Phoenix Pubsub
      {Absinthe.Subscription, ApolloCowboyExample.Absinthe.PubSub},

      # When a subscription is created we create an intermediary process that
      # translates from the Absinthe PubSub to the Apollo socket protocol
      # This supervisor watches those subscriptions.
      {DynamicSupervisor, strategy: :one_for_one, name: ApolloCowboyExample.BrokerSupervisor},

      # And we start the web server, on port 8080
      cowboy_server(8080, dispatch)
    ]

    # The supervisor is named just to make it easy to pick out in observer
    Supervisor.start_link(
      children,
      strategy: :one_for_one,
      name: ApolloCowboyExampleSupervisor
    )
  end

  defp cowboy_server(port, dispatch) do
    %{
      type: :supervisor,
      id: :cowboy,
      start: {:cowboy, :start_clear, [:http_server, [port: port], %{env: %{dispatch: dispatch}}]}
    }
  end
end
