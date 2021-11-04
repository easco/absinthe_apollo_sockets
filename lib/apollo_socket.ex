defmodule ApolloSocket do
  alias ApolloSocket.OperationMessage

  require Logger

  @enforce_keys [:websocket, :message_handler]
  defstruct [:websocket, :message_handler, :message_handler_opts]

  def new(opts) when is_list(opts) do
    Logger.debug("ApolloSocket: new")
    {required, other_opts} = Keyword.split(opts, [:message_handler, :websocket])

    required
    |> Enum.into(%{})
    |> create_socket(other_opts)
  end

  def websocket(apollo_socket), do: apollo_socket.websocket

  def handle_json_message(apollo_socket, json_string) when is_binary(json_string) do
    try do
      decoded = Jason.decode!(json_string)
      message = OperationMessage.from_json_map(decoded)

      Logger.debug("ApolloSocket: received #{inspect message}")

      case apollo_socket.message_handler.handle_message(apollo_socket, message, apollo_socket.message_handler_opts) do
        {:ok, new_opts} ->
          # update self with new handler context
          {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}

        {:reply, %OperationMessage{} = message, new_opts} ->
          Logger.debug("ApolloSocket plain: sending #{inspect message}")

          send_message(apollo_socket, message)
          {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}

        {:reply, messages, new_opts} when is_list(messages) ->
          Logger.debug("ApolloSocket array: sending #{inspect message}")
          Enum.each(messages, &send_message(apollo_socket, &1))
          {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}

        {:subscribed, _, new_opts} ->
          {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}
      end
    rescue
      e ->
        Logger.debug("Unexpected exception #{inspect e}")
        send_message(apollo_socket, OperationMessage.new_connection_error(%{
          message: ~s/An error occurred processing the message "#{json_string}"/
        }))
    end
  end

  def send_message(apollo_socket, %OperationMessage{} = message) do
  #  Logger.debug("ApolloSocket: sending #{inspect message}")

    json_string = message
    |>OperationMessage.to_json_map()
    |>Jason.encode!()

    # Logger.debug("Json Content: #{inspect json_string}")

    send(apollo_socket.websocket, {:send_json, json_string})

    {:ok, apollo_socket}
  end

  defp create_socket(%{websocket: pid, message_handler: module}, opts) when is_pid(pid) do
    message_handler_opts = module.init(Keyword.get(opts, :message_handler_opts))

    %__MODULE__{
      websocket: pid,
      message_handler: module,
      message_handler_opts: message_handler_opts
    }
  end
end
