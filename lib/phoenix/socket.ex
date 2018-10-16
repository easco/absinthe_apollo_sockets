defmodule ApolloSocket.Phoenix.Socket do
  require Logger
  @behaviour Phoenix.Socket.Transport

  alias ApolloSocket.Phoenix.BrokerSupervisor, as: BrokerSupervisor

  def child_spec(opts) do
    DynamicSupervisor.child_spec(strategy: :one_for_one, name: BrokerSupervisor)
  end

  def connect(map) do
    # Callback to retrieve relevant data from the connection.
    # The map contains options, params, transport and endpoint keys.
    Logger.debug("GraphqlSocket.connect #{inspect map}")
    {:ok, %{endpoint: map.endpoint, schema: Keyword.get(map.options, :schema)}}
  end

  def init(%{endpoint: endpoint, schema: schema}) do
    message_handler_opts = [
      schema: schema,
      pubsub: endpoint,
      broker_sup: BrokerSupervisor
    ]
    apollo_socket = ApolloSocket.new(websocket: self(),
                                     message_handler: ApolloSocket.AbsintheMessageHandler,
                                     message_handler_opts: message_handler_opts)
    {:ok, %{apollo_socket: apollo_socket}}
  end

  def handle_in({body, _opts}, %{apollo_socket: apollo_socket}) do
    {:ok, apollo_socket} = ApolloSocket.handle_json_message(apollo_socket, body)
    {:ok, %{apollo_socket: apollo_socket}}
  end

  def handle_in({message, _opts}, state) do
    Logger.debug("GraphqlSocket.handle_in unexpected message: #{message}")
    {:ok, state}
  end

  def handle_info({:send_json, json_string}, state) do
    {:push, {:text, json_string}, state}
  end

  def handle_info({:message_handler, message}, %{apollo_socket: apollo_socket}) do
    {:ok, apollo_socket} = ApolloSocket.handle_message_handler_info(apollo_socket, message)
    {:ok, %{apollo_socket: apollo_socket}}
  end

  def handle_info(message, state) do
    Logger.debug("GraphqlSocket.handle_info with message #{inspect message}")
    {:ok, state}
  end

  def terminate(_reason, _state) do
    Logger.debug("GraphqlSocket.terminate")
    :ok
  end
end

