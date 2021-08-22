# PhoenixSample

Example of ApolloSocket running on a Phoenix server.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix phx.server`, optionally after setting
    the Apollo socket path environment variable as described here.

Set the operating system environment variable `APOLLO_SOCKET_PATH`
to configure the path (under "socket/") for the Apollo websocket
that handles the GraphQL queries, mutations and subscriptions.
The value for the variable should be different than "websocket",
which Phoenix reserves for its channels.

The default is "apollo_socket", meaning that you would connect using 
the URL:

ws://localhost:4000/socket/apollo_socket

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix
