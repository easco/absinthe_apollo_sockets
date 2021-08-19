# ApolloCowboy

Example of ApolloSocket running on a cowboy webserver, without any Phoenix
dependencies other than the Phoenix.PubSub system.

To start the cowboy server:

  * Install dependencies with `mix deps.get`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix run --no-halt`

Two options can be set through environment variables:

`PORT` will set the port that cowboy listens on. 
  The default is 8080.

`APOLLO_SOCKET_PATH` will set the path (under "socket/") for the websocket
  that handles the GraphQL queries, mutations and subscriptions.  The default
  is "websocket", meaning that you would connect using the url:

  `ws://localhost:8080/socket/websocket`
