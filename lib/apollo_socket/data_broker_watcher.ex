defmodule ApolloSocket.DataBrokerWatcher do
  use GenServer

  alias ApolloSocket.DataBroker

  @moduledoc """
  This module represents a GenServer that keeps track of starting and stopping
  DataBrokers
  """

  @watcher_options [
    :broker_sup,
    :broker_registry
  ]

  def start_link(options) do
    {watcher_options, other_options} = Keyword.split(options, @watcher_options)
    GenServer.start_link(__MODULE__, watcher_options, other_options)
  end

  def start_data_broker(watcher, apollo_socket, pubsub, absinthe_id, operation_id) do
    send(watcher, {:start_broker, apollo_socket, pubsub, absinthe_id, operation_id})
    :ok
  end

  def stop_data_broker(watcher, apollo_socket, operation_id) do
    send(watcher, {:stop_broker, apollo_socket, operation_id})
    :ok
  end

  @impl true
  def init(options) do
    broker_sup = Keyword.get(options, :broker_sup)
    broker_registry = Keyword.get(options, :broker_registry)
    {:ok, %{
      broker_sup: broker_sup,
      broker_registry: broker_registry}}
  end

  @impl true
  def handle_info({:start_broker, apollo_socket, pubsub, absinthe_id, operation_id}, state) do
    child = data_broker_child_spec(
      apollo_socket,
      pubsub,
      absinthe_id,
      operation_id,
      state)
    {:ok, _} = DynamicSupervisor.start_child(state.broker_sup, child)
    {:noreply, state}
  end

  @impl true
  def handle_info({:stop_broker, apollo_socket, operation_id}, state) do
    case Registry.lookup(state.broker_registry, data_broker_key(apollo_socket, operation_id)) do
      [{pid, _}] ->
        DataBroker.stop(pid)
        {:noreply, state}
      
      _ ->
        {:noreply, state}
    end
  end

  defp data_broker_key(apollo_socket, operation_id) do
    {ApolloSocket.websocket(apollo_socket), operation_id}
  end

  defp data_broker_child_spec(apollo_socket, pubsub, absinthe_id, operation_id, state) do
    %{
      type: :worker,
      id: absinthe_id,
      start: { DataBroker, :start_link, [[
          pubsub: pubsub,
          absinthe_id: absinthe_id,
          operation_id: operation_id,
          apollo_socket: apollo_socket,
          name: {:via, Registry, {state.broker_registry, data_broker_key(apollo_socket, operation_id)}}
        ]]
      },
      restart: :transient
    }
  end
end
