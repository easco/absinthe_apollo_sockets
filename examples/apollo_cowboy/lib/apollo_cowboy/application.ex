defmodule ApolloCowboyExample.Application do
  use Application

  def start(_mode, _args) do
    # Read port and socket_path from environment variables
    {port, socket_path} = get_environment_args()

    # Define the router for cowboy that includes a socket handler
    # for the apollo sockets and a couple of static handlers
    # that serve up the example website.
    dispatch =
      :cowboy_router.compile([
        {:_,
         [
           {"/", :cowboy_static, {:priv_file, :apollo_cowboy, "static/index.html"}},
           {"/socket/#{socket_path}", ApolloSocket.CowboySocketHandler,
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
      cowboy_server(port, dispatch)
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ApolloCowboyExample.Supervisor]
    Supervisor.start_link(children, opts)
  end

  defp cowboy_server(port, dispatch) do
    %{
      type: :supervisor,
      id: :cowboy,
      start: {:cowboy, :start_clear, [:http_server, [port: port], %{env: %{dispatch: dispatch}}]}
    }
  end

  # Read PORT and APOLLO_SOCKET_PATH environment variables or defaults
  defp get_environment_args() do
    port = System.get_env("PORT", "8080") |> String.to_integer()
    socket_path = System.get_env("APOLLO_SOCKET_PATH", "websocket")
    {port, socket_path}
  end
end
