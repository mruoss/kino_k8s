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

  def containers(conn, namespace, pod) do
    with {:ok, pod} <-
           K8s.Client.get("v1", "pod", namespace: namespace, name: pod)
           |> K8s.Client.put_conn(conn)
           |> K8s.Client.run() do
      {:ok, get_in(pod, ["spec", "containers", Access.all(), "name"])}
    end
  end
end
