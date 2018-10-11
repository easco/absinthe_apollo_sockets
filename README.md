# Absinthe and Apollo Sockets

[Absinthe](https://absinthe-graphql.org) is a library for the Elixir programming language that allows a developer to create and expose a GraphQL interface.

[Apollo](https://www.apollographql.com) is a GraphQL system encorporating both Client and Server functionality.

The GraphQL standard defines Subscriptions as a means of receiving event-based notifications through a GraphQL interface, and notes that Web Sockets is one means of transmitting events, but the GraphQL standard itself does not define the Web Socket protocol for communication.

In the Elixir community [Absinthe Phoenix](https://github.com/absinthe-graphql/absinthe_phoenix) is a commonly used to forge a connection between a client and Absinthe using the [Phoenix Framework](https://phoenixframework.org) and its channel abstraction.

Apollo, in contrast [defines its own web socket protocol](https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md).

The purpose of this project is to implement the Apollo web socket protocol in Elixir and provide a means by which Apollo clients can invoke GraphQL Queries, Mutations and Subscriptions through a Web Socket based in the Apollo protocol communicating with Absinthe.
