defmodule ApolloSocketTest do
  use ExUnit.Case
  doctest ApolloSocket

  test "greets the world" do
    assert ApolloSocket.hello() == :world
  end
end
