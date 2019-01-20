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
      {:cowboy, "~>2.6"},
      {:absinthe, "~>1.4"},
      {:jason, "~> 1.1"},
      {:gettext, "~> 0.16"},
      {:phoenix_pubsub, "~> 1.1"},
      {:apollo_socket, path: "../../"}
    ]
  end
end
