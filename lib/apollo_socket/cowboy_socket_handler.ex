defmodule ApolloSocket.CowboySocketHandler do
  require Logger

  def init(request, state) do
    {:cowboy_websocket, request, state, %{idle_timeout: :infinity}}
  end

  def websocket_init({message_handling_module, message_handler_opts}) do
    apollo_socket = ApolloSocket.new(websocket: self(),
                      message_handler: message_handling_module,
                      message_handler_opts: message_handler_opts)
    {:ok, %{apollo_socket: apollo_socket}}
  end

  def websocket_handle({:text, body}, %{apollo_socket: apollo_socket}) do
    {:ok, apollo_socket} = ApolloSocket.handle_json_message(apollo_socket, body)
    {:ok, %{apollo_socket: apollo_socket}}
  end

  def websocket_handle(frame, state) do
    Logger.debug("CowboySocketHandler.websocket_handle with frame #{inspect frame}")
    {:ok, state}
  end

  # this handler responds to a request to return json data back through the web socket
  def websocket_info({:send_json, json_string}, state) when is_binary(json_string) do
    {:reply, [{:text, json_string}], state}
  end

  # generic message handler does nothing
  def websocket_info(message, state) do
    Logger.debug("CowboySocketHandler.websocket_info with message #{inspect message}")
    {:ok, state}
  end
end
