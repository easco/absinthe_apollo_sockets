defmodule ApolloSocket.OperationMessage do

  @enforce_keys [:type]
  defstruct id: nil, type: :gql_undefined, payload: nil

  @messages %{
    gql_connection_init: "connection_init",
    gql_connection_ack: "connection_ack",
    gql_connection_error: "connection_error",

    gql_connection_keep_alive: "ka",

    gql_connection_terminate: "connection_terminate",
    gql_start: "start",
    gql_data: "data",
    gql_error: "error",
    gql_complete: "complete",
    gql_stop: "stop"
  }

  @doc """
  Given a map, such as one that might have been created by parsing
  a JSON represenation of a message, construct an OperationMessage.
  """
  def from_json_map(%{"type" => _} = json_map) do
    Enum.reduce(json_map, %__MODULE__{type: :gql_undefined}, &add_operation_field/2)
  end

  @doc """
  Convert a given OperationMessage into a map that can be serialized
  to JSON. If the id or payload are nil, they will be excluded from the map
  """
  def to_json_map(message) do
    Enum.reduce(Map.from_struct(message), %{}, &field_to_json_map/2)
  end

  @doc "Simply creates a GQL_CONNECTION_ACK message"
  def new_connection_ack(), do: %__MODULE__{type: :gql_connection_ack}

  def new_data(id, data, resolver_errors \\ nil) do
    %__MODULE__{type: :gql_data, id: id, payload: %{ data: data }}
    |> add_resolver_errors_to_payload(resolver_errors)
  end

  def new_complete(operation_id), do: %__MODULE__{type: :gql_complete, id: operation_id}

  defp add_resolver_errors_to_payload(message, nil), do: message
  defp add_resolver_errors_to_payload(message, resolver_errors) do
    %__MODULE__{message | payload: Map.put(message.payload, :errors, resolver_errors)}
  end

  @doc """
  Creates a GQL_CONNECTION_ERROR message with the given error_object.
  The error_object should consist of things that can be serialized to JSON so it can be sent back to the client.
  """
  def new_connection_error(error_object), do: %__MODULE__{type: :gql_connection_error, payload: error_object}

  @doc """
  Creates a GQL_ERROR message with the given error_object.
  The error_object should consist of things that can be serialized to JSON so it can be sent back to the client.
  """
  def new_error(error_object), do: %__MODULE__{type: :gql_error, payload: error_object}

  defp add_operation_field({"id", id}, struct), do: %__MODULE__{struct | id: id}
  defp add_operation_field({"payload", payload}, struct), do: %__MODULE__{struct | payload: payload}

  # define an add_operation_field for each "well-known" message
  Enum.each(@messages, fn({message_atom, type_string}) ->
    defp add_operation_field({"type", unquote(type_string)}, struct) do
      %__MODULE__{struct | type: unquote(message_atom)}
    end
  end)

  # if we encounter an unexpected, uknown message type we preserve it as a string
  defp add_operation_field({"type", type}, struct), do: %__MODULE__{struct | type: type}

  defp field_to_json_map({:id, nil}, map), do: map
  defp field_to_json_map({:id, id}, map), do: Map.put(map, "id", id)

  defp field_to_json_map({:payload, nil}, map), do: map
  defp field_to_json_map({:payload, payload}, map), do: Map.put(map, "payload", payload)

  Enum.each(@messages, fn({message_atom, type_string}) ->
    defp field_to_json_map({:type, unquote(message_atom)}, map), do: Map.put(map, "type", unquote(type_string))
  end)

  defp field_to_json_map({:type, type}, map), do: Map.put(map, "type", type)
end
