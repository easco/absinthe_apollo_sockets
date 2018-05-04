defmodule ApolloCowboyExample do
  def start(_mode, _args) do
    # define the router for cowboy that includes a socket handler
    # for the apollo sockets.
    dispatch =
      :cowboy_router.compile([
        {:_, [
          {"/socket/websocket", ApolloSocket.CowboySocketHandler,
            {
              ApolloSocket.AbsintheMessageHandler,
              schema: ApolloCowboyExample.Schema, 
              pubsub: ApolloCowboyExample.Absinthe.PubSub,
              broker_sup: ApolloCowboyExample.BrokerSupervisor
            }
          }
       ]}
      ])

    children = [
      {ApolloCowboyExample.Counter, []},
      phoenix_pubsub(ApolloCowboyExample.PubSub),
      absinthe_subscriptions(ApolloCowboyExample.Absinthe.PubSub),
      {DynamicSupervisor, strategy: :one_for_one, name: ApolloCowboyExample.BrokerSupervisor},
      cowboy_server(8080, dispatch)
    ]

    # The supervisor is named just to make it easy to pick out in observer
    Supervisor.start_link(
      children,
      strategy: :one_for_one,
      name: ApolloCowboyExampleSupervisor
    )
  end

  def phoenix_pubsub(name) do
    %{
      type: :supervisor,
      id: name,
      start: {Phoenix.PubSub.PG2, :start_link, [name, []]}
    }
  end

  def absinthe_subscriptions(name) do
    %{
      type: :supervisor,
      id: Absinthe.Subscription,
      start: {Absinthe.Subscription, :start_link, [name]}
    }
  end

  def cowboy_server(port, dispatch) do
    %{
      type: :supervisor,
      id: :cowboy,
      start:
        {:cowboy, :start_http, [:http_server, 100, [port: port], [env: [dispatch: dispatch]]]}
    }
  end
end
