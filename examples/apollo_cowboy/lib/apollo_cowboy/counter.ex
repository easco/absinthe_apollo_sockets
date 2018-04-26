defmodule ApolloCowboyExample.Counter do
  use Agent

  def start_link(_opts) do
    Agent.start_link(fn -> %{} end, name: __MODULE__)
  end

  def counter(args, _context) do
    counter_id = args[:id]

    Agent.get_and_update(__MODULE__, fn map ->
      Map.get_and_update(map, counter_id, fn counter ->
        case counter do
          nil -> 
            new_counter = %{ id: counter_id, value: 0}
            {new_counter, new_counter}
          result -> 
            {result, result}
        end
      end)
    end)
  end

  def reset(args, _context) do
    counter_id = args[:id]

    Agent.get_and_update(__MODULE__, fn map ->
      new_counter = %{ id: counter_id, value: 0}
      {new_counter, Map.put(map, counter_id, new_counter)}
    end)
  end

  def increment(args, _context) do
    counter_id = args[:id]

    Agent.get_and_update(__MODULE__, fn map ->
      Map.get_and_update(map, counter_id, fn counter ->
        case counter do
          nil -> 
            new_counter = %{ id: counter_id, value: 1}
            {new_counter, new_counter}
          
          %{ id: ^counter_id, value: value} -> 
            new_counter = %{ id: counter_id, value: value + 1}
            {new_counter, new_counter}
        end
      end)
    end)
  end
end
