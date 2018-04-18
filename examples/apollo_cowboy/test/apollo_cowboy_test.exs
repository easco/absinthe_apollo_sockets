defmodule ApolloCowboyTest do
  use ExUnit.Case
  doctest ApolloCowboy

  test "greets the world" do
    assert ApolloCowboy.hello() == :world
  end
end
