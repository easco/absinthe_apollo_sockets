# ApolloCowboy

Example of ApolloSocket running on a cowboy webserver, without any Phoenix
dependencies other than the Phoenix.PubSub system.

To start the cowboy server:

  * Install dependencies with `mix deps.get`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start dev server with `mix run --no-halt`

Two options can be set through environment variables:

`PORT` will set the port that cowboy listens on. 
  The default is 8080.

`APOLLO_SOCKET_PATH` will set the path (under "socket/") for the websocket
  that handles the GraphQL queries, mutations and subscriptions.  The default
  is "websocket", meaning that you would connect using the url:

  ws://localhost:8080/socket/websocket

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `apollo_cowboy` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:apollo_cowboy, "~> 0.1.0"}
  ]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/apollo_cowboy](https://hexdocs.pm/apollo_cowboy).
