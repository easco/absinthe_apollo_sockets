defmodule ApolloSocket.MixProject do
  use Mix.Project

  def project do
    [
      app: :apollo_socket,
      version: "0.1.0",
      elixir: "~>1.9",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger, :gproc]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:absinthe, "~> 1.6.6"},
      {:gproc, "~> 0.9.0"},
      {:jason, "~> 1.2.2"},
      {:phoenix_pubsub, "~> 2.0"}
    ]
  end
end
