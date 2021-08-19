defmodule ApolloSocket.MixProject do
  use Mix.Project

  def project do
    [
      app: :apollo_socket,
      version: "0.1.0",
      elixir: "~> 1.6",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:absinthe, "~> 1.6.3"},
      {:jason, "~> 1.2.2"},
      {:phoenix_pubsub, "~> 2.0"},
      {:gproc, "~> 0.9"}
    ]
  end
end
