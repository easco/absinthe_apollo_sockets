defmodule ApolloCowboy.MixProject do
  use Mix.Project

  def project do
    [
      app: :apollo_cowboy,
      version: "0.1.0",
      elixir: "~> 1.8",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      mod: {ApolloCowboyExample, []},
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:cowboy, "~>2.9"},
      {:absinthe, "~>1.6.6"},
      {:jason, "~> 1.2"},
      {:gettext, "~> 0.18"},
      {:phoenix_pubsub, "~> 2.0"},
      {:apollo_socket, path: "../../"}
    ]
  end
end
