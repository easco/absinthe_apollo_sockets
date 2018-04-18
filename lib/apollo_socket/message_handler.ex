defmodule ApolloSocket.MessageHandler do
  require Logger

  alias ApolloSocket.OperationMessage

  @type message_handler_opts :: any()
  @type message_handler_result :: {:ok, any()} | {:reply, %OperationMessage{}, any()}

  @callback init(message_handler_opts) :: message_handler_opts
  @callback handle_connection_init(map(), message_handler_opts) :: message_handler_result
  @callback handle_start(String.t, String.t, String.t, map(), message_handler_opts) :: message_handler_result
  @callback handle_stop(String.t, message_handler_opts) :: message_handler_result

  def handle_connection_init(_module, _connection_params, opts) do
    {:reply, OperationMessage.new_connection_ack(), opts }
  end

  @doc false
  def handle_message(module, %OperationMessage{ type: :gql_connection_init } = message, opts) do
    module.handle_connection_init(message.payload, opts)
  end

  @doc false
  def handle_message(module, %OperationMessage{ type: :gql_start, id: operation_id} = message, opts) do
    %{
      "operationName" => operation_name,
      "variables" => variables,
      "query" => graphql_doc,
    } = message.payload

    module.handle_start(operation_id, operation_name, graphql_doc, variables, opts)
  end

  @doc false
  def handle_message(module, %OperationMessage{ type: :gql_stop, id: operation_id }, opts) do
    module.handle_stop(operation_id, opts)
  end

  @doc false
  def handle_message(_module, %OperationMessage{}, opts) do
    {:ok, opts}
  end

  defmacro __using__(_use_options) do
    quote location: :keep do
      @behaviour ApolloSocket.MessageHandler

      @impl ApolloSocket.MessageHandler
      def handle_connection_init(connection_params, opts), do:
        ApolloSocket.MessageHandler.handle_connection_init(__MODULE__, connection_params, opts)

      @impl true
      def handle_start(_operation_id, _operation_name, _graphql_doc, _variables, opts) do
        {:ok, opts }
      end

      @impl true
      def handle_stop(_operation_id, opts) do
        { :ok, opts }
      end

      def handle_message(%OperationMessage{} = message, opts), do:
        ApolloSocket.MessageHandler.handle_message(__MODULE__, message, opts)

      defoverridable ApolloSocket.MessageHandler
    end
  end
end 