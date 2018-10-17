defmodule ApolloSocket.CowboySocketHandler do
  require Logger

  def init(_, _request, options) do
    Logger.debug("CowboySocketHandler.init #{inspect options}")
    {:upgrade, :protocol, :cowboy_websocket}
  end

  def websocket_init(_type, request, {message_handling_module, message_handler_opts}) do
    apollo_socket = ApolloSocket.new(websocket: self(),
                                     message_handler: message_handling_module,
                                     message_handler_opts: message_handler_opts)
    {:ok, request, %{apollo_socket: apollo_socket}}
  end

  def websocket_handle({:text, body}, request, %{apollo_socket: apollo_socket}) do
    {:ok, apollo_socket} = ApolloSocket.handle_json_message(apollo_socket, body)  
    {:ok, request, %{apollo_socket: apollo_socket}}
  end

  def websocket_handle(frame, request, state) do
    Logger.debug("CowboySocketHandler.websocket_handle with frame #{inspect frame}")
    {:ok, request, state}
  end

  # this handler responds to a request to return json data back through the web socket
  def websocket_info({:send_json, json_string}, request, state) when is_binary(json_string) do
    {:reply, [{:text, json_string}], request, state}
  end

  # generic message handler does nothing
  def websocket_info(message, request, state) do
    Logger.debug("CowboySocketHandler.websocket_info with message #{inspect message}")
    {:ok, request, state}
  end

  def websocket_terminate(_reason, _request, _state) do
    Logger.debug("CowboySocketHandler.websocket_terminate")
    :ok
  end
end