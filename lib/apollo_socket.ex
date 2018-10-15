defmodule ApolloSocket do
  alias ApolloSocket.OperationMessage

  require Logger

  @enforce_keys [:websocket, :message_handler]
  defstruct [:websocket, :message_handler, :message_handler_opts]

  def new(opts) when is_list(opts) do
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

      result = apollo_socket.message_handler.handle_message(apollo_socket, message, apollo_socket.message_handler_opts)
      process_message_handler_result(apollo_socket, result)
    rescue
      e ->
        Logger.debug("Unexpected exception #{inspect e}")
        send_message(apollo_socket, OperationMessage.new_connection_error(%{
          message: ~s/An error occurred processing the message "#{json_string}"/
        }))
    end
  end

  def handle_message_handler_info(apollo_socket, message) do
    try do
      result = apollo_socket.message_handler.handle_info(apollo_socket, message, apollo_socket.message_handler_opts)
      process_message_handler_result(apollo_socket, result)
    rescue
      e ->
        Logger.error("Unexpected exception #{inspect e}")
    end
  end

  def send_message(apollo_socket, %OperationMessage{} = message) do
    Logger.debug("ApolloSocket: sending #{inspect message}")

    json_string = message
    |>OperationMessage.to_json_map()
    |>Jason.encode!()

    send(apollo_socket.websocket, {:send_json, json_string})

    {:ok, apollo_socket}
  end

  def send_message_handler_info(apollo_socket, message) do
    send(apollo_socket.websocket, {:message_handler, message})
    {:ok, apollo_socket}
  end

  defp process_message_handler_result(apollo_socket, {:ok, new_opts}) do
    {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}
  end
  defp process_message_handler_result(apollo_socket, {:reply, %OperationMessage{} = message, new_opts}) do
    send_message(apollo_socket, message)
    {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}
  end
  defp process_message_handler_result(apollo_socket, {:reply, messages, new_opts}) when is_list(messages) do
    Enum.each(messages, &send_message(apollo_socket, &1))
    {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}
  end
  defp process_message_handler_result(apollo_socket, {:subscribed, _, new_opts}) do
    {:ok, %__MODULE__{apollo_socket | message_handler_opts: new_opts}}
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
