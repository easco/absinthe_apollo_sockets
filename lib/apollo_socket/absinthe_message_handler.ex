defmodule ApolloSocket.AbsintheMessageHandler do
  use ApolloSocket.MessageHandler

  alias ApolloSocket.OperationMessage
  require Logger

  @impl ApolloSocket.MessageHandler
  def init(opts) when is_list(opts) do
    {known_opts, _} = Keyword.split(opts, [:schema, :pubsub, :broker_sup])
    
    Enum.into(known_opts, %{broker_processes: []})
  end

  @impl ApolloSocket.MessageHandler
  def handle_start(apollo_socket, operation_id, operation_name, graphql_doc, variables, opts) do
    absinthe_opts = [variables: variables, context: %{pubsub: opts[:pubsub]}]
    |> add_operation_name(operation_name)

    result = Absinthe.run(graphql_doc, opts[:schema], absinthe_opts)

    Logger.debug("Query result #{inspect result}")

    case result do
      {:ok, %{"subscribed" => absinthe_subscription_id}} ->

        {:ok, _} = DynamicSupervisor.start_child(opts[:broker_sup],
          data_broker_child_spec(
            opts[:pubsub],
            absinthe_subscription_id,
            operation_id,
            apollo_socket
            ))
        {:ok, opts}

      {:ok, query_response } -> 
        {:reply, messages_for_result(operation_id, query_response), opts}
    end
  end

  @impl ApolloSocket.MessageHandler
  def handle_stop(apollo_socket, operation_id, opts) do
    data_broker_pids =
      opts.broker_processes
      |> Enum.filter(&(elem(&1, 0) == operation_id))
      |> Enum.map(&elem(&1, 1))

    Enum.each(data_broker_pids, &ApolloSocket.DataBroker.stop/1)

    new_broker_processes =
      opts.broker_processes
      |> Enum.filter(&(elem(&1, 0) != operation_id))

    case data_broker_pids do
      [] ->
        {:reply, OperationMessage.new_connection_error(message: "No subscription active with id: #{operation_id}"), opts}
      _ ->
        {:reply, OperationMessage.new_complete(operation_id), %{opts | broker_processes: new_broker_processes}}
    end
  end

  @impl ApolloSocket.MessageHandler
  def handle_info(apollo_socket, {:data_broker_started, operation_id, pid}, opts) do
    new_opts = %{opts | broker_processes: [{operation_id, pid} | opts.broker_processes]}
    {:ok, new_opts}
  end

  defp data_broker_child_spec(pubsub, absinthe_subscription_id, operation_id, socket) do
    %{
      type: :worker,
      id: absinthe_subscription_id,
      start: { ApolloSocket.DataBroker, :start_link, [[
          pubsub: pubsub,
          absinthe_id: absinthe_subscription_id,
          operation_id: operation_id,
          apollo_socket: socket,
          init_callback: &__MODULE__.data_broker_init_callback/1
        ]]
      },
      restart: :transient
    }
  end

  defp add_operation_name(opts, nil), do: opts
  defp add_operation_name(opts, name), do: Keyword.put(opts, :operation_name, name)

  defp messages_for_result(operation_id, query_response) when is_map(query_response) do
    [
      OperationMessage.new_data(
        operation_id, 
        Map.get(query_response, :data),
        Map.get(query_response, :errors)),
      OperationMessage.new_complete(operation_id)
    ]
  end

  def data_broker_init_callback(opts) do
    ApolloSocket.send_message_handler_info(opts[:apollo_socket], {:data_broker_started, opts[:operation_id], self()})
  end
end
