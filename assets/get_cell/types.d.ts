export type GVK = {
  kind: string
  name: string
  api_version: string
  index: string
}

export type GETCellAttrs = {
  error?: string
  result_variable: string
  mix_env: string
  search_term: string
  search_result_items: [GVK]
  gvk: GVK
  namespaces: [string]
  namespace: string
  resources: [string]
  resource: string
}
