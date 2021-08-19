# PhoenixSample

Example of ApolloSocket running on a Phoenix server.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix phx.server`

Two options can be set through environment variables:

`PORT` will set the port that the server listens on. 
  The default is 4000.

`APOLLO_SOCKET_PATH` will set the path (under "socket/") for the websocket
  that handles the GraphQL queries, mutations and subscriptions. It
  should be different than "websocket", which Phoenix uses for channels.
  The default is "apollo_socket", meaning that you would connect using the url:

  `ws://localhost:4000/socket/apollo_socket`

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix
