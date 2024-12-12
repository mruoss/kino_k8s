defmodule KinoK8s.K8sHelper do
  @moduledoc false

  def namespaces(req) do
    with {:ok, %{status: 200, body: body}} <- Kubereq.list(req, kind: "Namespace") do
      {:ok, get_in(body, ["items", Access.all(), "metadata", "name"])}
    end
  end

  def resources(req, api_version, kind, namespace) do
    with {:ok, %{status: 200, body: body}} <-
           Kubereq.list(req, namespace, api_version: api_version, kind: kind) do
      {:ok, get_in(body, ["items", Access.all(), "metadata", "name"])}
    end
  end

  def pods(conn, namespace), do: resources(conn, "v1", "pod", namespace)

  def containers(req, namespace, name) do
    with {:ok, %{status: 200, body: body}} <-
           Kubereq.get(req, namespace, name, api_version: "v1", kind: "Pod") do
      {:ok, get_in(body, ["spec", "containers", Access.all(), "name"])}
    end
  end
end
