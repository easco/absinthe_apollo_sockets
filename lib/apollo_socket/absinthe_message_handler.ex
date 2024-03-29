defmodule ApolloSocket.AbsintheMessageHandler do
  use ApolloSocket.MessageHandler

  alias ApolloSocket.OperationMessage
  require Logger

  @impl ApolloSocket.MessageHandler
  def init(opts) when is_list(opts) do
    {known_opts, _} = Keyword.split(opts, [:schema, :pubsub, :broker_sup])
    Enum.into(known_opts, %{ref: make_ref()})
  end

  @impl ApolloSocket.MessageHandler
  def handle_start(apollo_socket, operation_id,
                   operation_name, graphql_doc,
                   variables, opts) do

    absinthe_opts = [context: %{pubsub: opts[:pubsub]}]
    |> add_operation_name(operation_name)
    |> add_variables(variables)

    result = Absinthe.run(graphql_doc, opts[:schema], absinthe_opts)

    Logger.debug("Query result #{inspect result}")

    case result do
      {:ok, %{"subscribed" => absinthe_subscription_id}} ->
        Logger.debug("Beginning subscribe operation #{operation_id}")
        {:ok, _} = DynamicSupervisor.start_child(opts[:broker_sup],
          data_broker_child_spec(
            opts[:pubsub],
            absinthe_subscription_id,
            {opts[:ref], operation_id},
            apollo_socket
            ))
        {:ok, opts}

      {:ok, query_response } ->
        {:reply, messages_for_result(operation_id, query_response), opts}
    end
  end

  @impl ApolloSocket.MessageHandler
  def handle_stop(_apollo_socket, operation_id, opts) do
    Logger.debug("Stopping subscribe operation #{operation_id}")
    GenServer.stop(via_proc_id({opts[:ref], operation_id}), :normal)
    { :ok, opts }
  end

  defp data_broker_child_spec(
    pubsub,
    absinthe_subscription_id,
    {ref, operation_id},
    socket) do
    %{
      type: :worker,
      id: absinthe_subscription_id,
      restart: :temporary,
      start: { ApolloSocket.DataBroker, :start_link, [[
          pubsub: pubsub,
          absinthe_id: absinthe_subscription_id,
          operation_id: operation_id,
          apollo_socket: socket,
          name: via_proc_id({ref, operation_id})
        ]]
      }
    }
  end

  defp via_proc_id({ref, operation_id}), do: {:via, :gproc, {:n, :l, {__MODULE__, ref, operation_id}} }

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
