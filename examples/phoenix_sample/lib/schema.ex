defmodule PhoenixSample.Schema do
  use Absinthe.Schema

  alias PhoenixSample.Counter

  query do
    field :counter, :counter do
      arg(:id, non_null(:string))

      resolve(&Counter.counter/2)
    end
  end

  object :counter do
    field(:id, :string)
    field(:value, :integer)
  end

  mutation do
    field :reset_counter, :counter do
      arg(:id, non_null(:string))

      resolve(&Counter.reset/2)
    end

    field :increment_counter, :counter do
      arg(:id, non_null(:string))

      resolve(&Counter.increment/2)
    end
  end

  subscription do
    field :counter, :counter do
      arg(:id, non_null(:string))

      trigger(:reset_counter,
        topic: fn counter ->
          "counter:" <> counter.id
        end
      )

      trigger(:increment_counter,
        topic: fn counter ->
          "counter:" <> counter.id
        end
      )

      config(fn %{id: counter_id}, _ -> {:ok, topic: topic_for_counter(counter_id)} end)
    end
  end

  defp topic_for_counter(id), do: "counter:" <> id
end
