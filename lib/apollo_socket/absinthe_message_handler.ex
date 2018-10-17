defmodule ApolloSocket.AbsintheMessageHandler do
  use ApolloSocket.MessageHandler

  alias ApolloSocket.OperationMessage
  alias ApolloSocket.DataBrokerWatcher
  require Logger

  @impl ApolloSocket.MessageHandler
  def init(opts) when is_list(opts) do
    {known_opts, _} = Keyword.split(opts, [:schema, :pubsub, :broker_watcher])
    Enum.into(known_opts, %{})
  end

  @impl ApolloSocket.MessageHandler
  def handle_start(apollo_socket, operation_id, operation_name, graphql_doc, variables, opts) do
    absinthe_opts = [variables: variables, context: %{pubsub: opts[:pubsub]}]
    |> add_operation_name(operation_name)

    result = Absinthe.run(graphql_doc, opts[:schema], absinthe_opts)

    Logger.debug("Query result #{inspect result}")

    case result do
      {:ok, %{"subscribed" => absinthe_id}} ->
        DataBrokerWatcher.start_data_broker(
          opts.broker_watcher,
          apollo_socket,
          opts[:pubsub],
          absinthe_id,
          operation_id)
        {:ok, opts}

      {:ok, query_response } -> 
        {:reply, messages_for_result(operation_id, query_response), opts}
    end
  end

  @impl ApolloSocket.MessageHandler
  def handle_stop(apollo_socket, operation_id, opts) do
    DataBrokerWatcher.stop_data_broker(opts.broker_watcher, apollo_socket, operation_id)
    # TODO: Handle reporting an error if the subscription doesn't exist
      # {:reply, OperationMessage.new_connection_error(message: "No subscription active with id: #{operation_id}"), opts}
    {:reply, OperationMessage.new_complete(operation_id), opts}
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
end
