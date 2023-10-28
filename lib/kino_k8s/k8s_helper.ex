defmodule KinoK8s.K8sHelper do
  def namespaces(conn) do
    with {:ok, ns_list} <-
           K8s.Client.list("v1", "namespace")
           |> K8s.Client.put_conn(conn)
           |> K8s.Client.run() do
      {:ok, get_in(ns_list, ["items", Access.all(), "metadata", "name"])}
    end
  end

  def resources(conn, api_version, kind, namespace) do
    with {:ok, pod_list} <-
           K8s.Client.list(api_version, kind, namespace: namespace)
           |> K8s.Client.put_conn(conn)
           |> K8s.Client.run() do
      {:ok, get_in(pod_list, ["items", Access.all(), "metadata", "name"])}
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
