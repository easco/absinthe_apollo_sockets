defmodule ApolloSocket.AbsintheMessageHandler do
  use ApolloSocket.MessageHandler

  alias ApolloSocket.OperationMessage
  require Logger

  @impl ApolloSocket.MessageHandler
  def init(opts) when is_list(opts) do
    {known_opts, _} = Keyword.split(opts, [:schema, :pubsub, :broker_sup])
    Enum.into(known_opts, %{})
  end

  @impl ApolloSocket.MessageHandler
  def handle_start(apollo_socket, operation_id, operation_name, graphql_doc, variables, opts) do
    absinthe_opts = [context: %{pubsub: opts[:pubsub]}]
    |> add_operation_name(operation_name)
    |> add_variables(variables)

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

  defp data_broker_child_spec(pubsub, absinthe_subscription_id, operation_id, socket) do
    %{
      type: :worker,
      id: absinthe_subscription_id,
      restart: :temporary,
      start: { ApolloSocket.DataBroker, :start_link, [[
          pubsub: pubsub,
          absinthe_id: absinthe_subscription_id,
          operation_id: operation_id,
          apollo_socket: socket
        ]]
      }
    }
  end

  defp add_operation_name(opts, nil), do: opts
  defp add_operation_name(opts, name), do: Keyword.put(opts, :operation_name, name)

  defp add_variables(opts, nil), do: opts
  defp add_variables(opts, variables), do: Keyword.put(opts, :variables, variables)

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
