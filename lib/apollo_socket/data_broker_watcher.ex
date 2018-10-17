defmodule ApolloSocket.DataBrokerWatcher do
  use GenServer

  @moduledoc """
  This module represents a GenServer that keeps track of starting and stopping
  DataBrokers
  """

  @watcher_options [
    :broker_sup
  ]

  def start_link(options) do
    {watcher_options, other_options} = Keyword.split(options, @watcher_options)
    GenServer.start_link(__MODULE__, watcher_options, other_options)
  end

  def init(options) do
    broker_sup = Keyword.get(options, :broker_sup)
    {:ok, %{broker_sup: broker_sup}}
  end
end
