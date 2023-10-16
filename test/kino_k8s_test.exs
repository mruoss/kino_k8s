defmodule KinoK8sTest do
  use ExUnit.Case
  doctest KinoK8s

  test "greets the world" do
    assert KinoK8s.hello() == :world
  end
end
