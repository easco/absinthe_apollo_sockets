defmodule ApolloSocket.Supervisor do
  use Supervisor

  @moduledoc """
  The root of the ApolloSocket's supervision tree
  """

  @defaults [name: __MODULE__]

  def start_link(options) do
    merged = Keyword.merge(@defaults, options)
    name = Keyword.get(merged, :name)
    
    Supervisor.start_link(__MODULE__, {name}, merged)
  end

  @impl true
  def init({name}) when is_atom(name) do
    watcher_name = Module.concat(name, DataBrokerWatcher)
    broker_sup_name = Module.concat(name, BrokerSupervisor)
    broker_registry_name = Module.concat(name, BrokerRegistry)

    children = [
      {DynamicSupervisor, strategy: :one_for_one, name: broker_sup_name},
      {Registry, keys: :unique, name: broker_registry_name},
      {ApolloSocket.DataBrokerWatcher, 
        broker_sup: broker_sup_name,
        broker_registry: broker_registry_name,
        name: watcher_name},
    ]
    Supervisor.init(children, strategy: :one_for_one)
  end
end
