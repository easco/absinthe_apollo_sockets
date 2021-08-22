# ApolloCowboy

Example of ApolloSocket running on a cowboy webserver, without any Phoenix
dependencies other than the Phoenix.PubSub system.

To start the cowboy server:

  * Install dependencies with `mix deps.get`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix run --no-halt`

After starting, connect to the Apollo socket at:

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
