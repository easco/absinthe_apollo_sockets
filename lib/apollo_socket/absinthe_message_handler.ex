defmodule ApolloSocket.AbsintheMessageHandler do
  use ApolloSocket.MessageHandler

  @impl ApolloSocket.MessageHandler
  def init(opts) when is_list(opts) do
    {known_opts, _} = Keyword.split(opts, [:schema, :pubsub])
    Enum.into(known_opts, %{})
  end

  @impl ApolloSocket.MessageHandler
  def handle_start(_operation_id, _operation_name, graphql_doc, _variables, opts) do
    IO.puts("I would handle the document with #{inspect opts}:")
    IO.puts(graphql_doc)
    IO.puts("if I knew how")
    {:ok, opts }
  end
end