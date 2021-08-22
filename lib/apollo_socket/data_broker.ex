defmodule ApolloSocket.DataBroker do
  use GenServer

  alias ApolloSocket.OperationMessage

  require Logger

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
    :operation_id
  ]

  def start_link(options) do
    {broker_options, other_options} = Keyword.split(options, @broker_options)
    start_options = Keyword.put(other_options, :name, via_tuple(options))
    GenServer.start_link(__MODULE__, broker_options, start_options)
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

  def unsubscribe(apollo_socket, operation_id) do
    GenServer.call(via_tuple(apollo_socket, operation_id), :unsubscribe)
  end

  def handle_call(:unsubscribe, _from, %{pubsub: pubsub, absinthe_id: absinthe_id} = state) do
    result = pubsub.unsubscribe(absinthe_id)
    Logger.debug("id #{state.operation_id} unusbscribed #{inspect(result)}")

    {:stop, :normal, result, state}
  end

  def handle_info({:DOWN, _ref, :process, pid, reason}, state) do
    # Websocket went down.  This process can exit now
    Logger.info("id #{state.operation_id} tearing down data broker #{inspect(pid)} #{reason}")

    {:stop, reason, state}
  end

  def handle_info(%{data: _} = proc_message, state) do
    send_data_result(proc_message, state)
  end

  def handle_info(%{errors: _} = proc_message, state) do
    send_data_result(proc_message, state)
  end

  def handle_info(proc_message, state) when is_map(proc_message) do
    Logger.warn("id #{state.operation_id} no data or errors in message #{inspect(proc_message)}")

    send_data_result(proc_message, state)
  end

  defp send_data_result(proc_message, state) do
    op_message = data_message_for_result(state.operation_id, proc_message)
    ApolloSocket.send_message(state.apollo_socket, op_message)

    {:noreply, state}
  end

  defp data_message_for_result(operation_id, query_response) do
    OperationMessage.new_data(
      operation_id,
      Map.get(query_response, :data),
      Map.get(query_response, :errors))
  end

  defp subscribe_to_data(nil, _), do: raise "#{__MODULE__} requires the Absinthe PubSub module to subscribe to"
  defp subscribe_to_data(_, nil), do: raise "#{__MODULE__} requires an Absinthe subscription id"
  defp subscribe_to_data(pubsub, absinthe_id) do
    pubsub.subscribe(absinthe_id)
  end

  defp monitor_websocket(nil), do: raise "#{__MODULE__} requires the pid of the hosting websocket"
  defp monitor_websocket(socket) do
    Process.monitor(socket)
  end

  defp via_tuple(options) when is_list(options) do
    apollo_socket = Keyword.fetch!(options, :apollo_socket)
    operation_id = Keyword.fetch!(options, :operation_id)
    via_tuple(apollo_socket, operation_id)
  end

  defp via_tuple(%ApolloSocket{websocket: websocket_pid}, operation_id) do
    name = {:apollo_broker, websocket_pid, operation_id}
    {:via, :gproc, {:n, :l, {:name, name}}}
  end
end
