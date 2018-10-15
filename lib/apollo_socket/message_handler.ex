defmodule ApolloSocket.MessageHandler do
  require Logger

  alias ApolloSocket.OperationMessage

  @type apollo_socket :: %ApolloSocket{}
  @type message_handler_opts :: any()
  @type message_handler_result :: {:ok, message_handler_opts} | 
    {:reply, %OperationMessage{}, message_handler_opts} |
    {:reply, list(%OperationMessage{}), message_handler_opts}

  @callback init(message_handler_opts) :: message_handler_opts
  @callback handle_connection_init(apollo_socket, map(), message_handler_opts) :: message_handler_result
  @callback handle_start(apollo_socket, String.t, String.t, String.t, map(), message_handler_opts) :: message_handler_result
  @callback handle_stop(apollo_socket, String.t, message_handler_opts) :: message_handler_result

  def handle_connection_init(_module, _apollo_socket, _connection_params, opts) do
    {:reply, OperationMessage.new_connection_ack(), opts }
  end

  @doc false
  def handle_message(module, apollo_socket, %OperationMessage{ type: :gql_connection_init } = message, opts) do
    module.handle_connection_init(apollo_socket, message.payload, opts)
  end

  @doc false
  def handle_message(module, apollo_socket, %OperationMessage{ type: :gql_start, id: operation_id} = message, opts) do
    %{ "query" => graphql_doc } = message.payload
    operation_name = message.payload["operationName"]
    variables = message.payload["variables"]

    module.handle_start(apollo_socket, operation_id, operation_name, graphql_doc, variables, opts)
  end

  @doc false
  def handle_message(module, apollo_socket, %OperationMessage{ type: :gql_stop, id: operation_id }, opts) do
    module.handle_stop(apollo_socket, operation_id, opts)
  end

  @doc false
  def handle_message(_module, _apollo_socket, %OperationMessage{}, opts) do
    {:ok, opts}
  end

  defmacro __using__(_use_options) do
    quote location: :keep do
      @behaviour ApolloSocket.MessageHandler

      @impl ApolloSocket.MessageHandler
      def handle_connection_init(apollo_socket, connection_params, opts), do:
        ApolloSocket.MessageHandler.handle_connection_init(__MODULE__, apollo_socket, connection_params, opts)

      @impl true
      def handle_start(_apollo_socket, _operation_id, _operation_name, _graphql_doc, _variables, opts) do
        {:ok, opts }
      end

      @impl true
      def handle_stop(_apollo_socket, _operation_id, opts) do
        { :ok, opts }
      end

      def handle_message(apollo_socket, %OperationMessage{} = message, opts), do:
        ApolloSocket.MessageHandler.handle_message(__MODULE__, apollo_socket, message, opts)

      defoverridable ApolloSocket.MessageHandler
    end
  end
end 