defmodule ApolloSocket.DataBroker do
  use GenServer

  alias ApolloSocket.OperationMessage

  require Logger
  require IEx

  @moduledoc """
  This module implements a GenServer that sits as an intermediary between
  the Absinthe pubsub that is broadcasting subscription data and the websocket
  that sends that data back to the client.  This GenServer also translates
  between the Absinthe token that represents a subscription and the Apollo
  concept of an operation id which is how Apollo keeps track of a subscription.
  """

  @broker_options [
    :apollo_socket,
    :pubsub,
    :absinthe_id,
    :operation_id,
  ]

  def start_link(options) do
    {broker_options, other_options} = Keyword.split(options, @broker_options)
    GenServer.start_link(__MODULE__, broker_options, other_options)
  end

  def init(options) do
    pubsub = Keyword.get(options, :pubsub)
    absinthe_id = Keyword.get(options, :absinthe_id)
    apollo_socket = Keyword.get(options, :apollo_socket)

    subscribe_to_data(pubsub, absinthe_id)
    monitor_id = monitor_websocket(ApolloSocket.websocket(apollo_socket))

    {:ok, %{
      apollo_socket: apollo_socket,
      pubsub: pubsub,
      absinthe_id: absinthe_id,
      operation_id: Keyword.get(options, :operation_id),
      socket_monitor_id: monitor_id
      }}
  end

  def handle_info({:DOWN, _ref, :process, pid, reason}, state) do
    IO.puts("Tearing down data broker #{inspect pid} #{reason}")
    # my websocket went down.  This process can exit now
    Process.exit(self(), reason)
    {:noreply, state}
  end

  def handle_info(%{data: _, errors: _} = proc_message, state) do
    send_data_result(proc_message, state)
  end

  def handle_info(%{errors: _} = proc_message, state) do
    send_data_result(proc_message, state)
  end

  def handle_info(%{data: _} = proc_message, state) do
    send_data_result(proc_message, state)
  end

  defp send_data_result(proc_message, state) when is_map(proc_message) do
    Logger.debug("send_data_result")
    op_message = data_message_for_result(state.operation_id, proc_message)
    ApolloSocket.send_message(state.apollo_socket, op_message)

    {:noreply, state}
  end

  defp data_message_for_result(operation_id, query_response) when is_map(query_response) do
    OperationMessage.new_data(
      operation_id,
      Map.get(query_response, :data),
      Map.get(query_response, :errors))
  end

  def subscribe_to_data(nil, _), do: raise "#{__MODULE__} requires the Absinthe PubSub module to subscribe to"
  def subscribe_to_data(_, nil), do: raise "#{__MODULE__} requires an Absinthe subscription id"
  def subscribe_to_data(pubsub, absinthe_id) do
    pubsub.subscribe(absinthe_id)
  end

  def monitor_websocket(nil), do: raise "#__MODULE__ requires the pid of the hosting websocket"
  def monitor_websocket(socket) do
    Process.monitor(socket)
  end
end
