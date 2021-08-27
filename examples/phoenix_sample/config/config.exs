# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

socket_path = System.get_env("APOLLO_SOCKET_PATH", "apollo_socket")

# Configures the endpoint
config :phoenix_sample, PhoenixSampleWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "lcHcYi7X2kV8DC9nvRqMRQGUfKxok0w4EGDYmn1ZR0HFctPVLryd4sDp9Q5u9VH9",
  render_errors: [view: PhoenixSampleWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: PhoenixSample.PubSub,
  live_view: [signing_salt: "ydK4MZhU"],

  # We override the Cowboy dispatcher to put our apollo socket handler
  # ahead of the Phoenix endpoint adapter.
  http: [dispatch: [
          {:_, [
              {"/socket/#{socket_path}", ApolloSocket.CowboySocketHandler,
                { # ApolloSocket configuration settings
                  ApolloSocket.AbsintheMessageHandler,
                  schema: PhoenixSample.Schema,
                  pubsub: PhoenixSample.Absinthe.PubSub,
                  broker_sup: PhoenixSample.BrokerSupervisor
                }
              },
              {:_, Phoenix.Endpoint.Cowboy2Handler, {PhoenixSampleWeb.Endpoint, []}}
            ]}]]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
