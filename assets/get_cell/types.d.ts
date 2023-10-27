import { Attributes } from '../shared/types'

export interface GVK {
  kind: string
  name: string
  api_version: string
  index: string
}

export interface GETCellAttrs extends Attributes {
  connection?: { variable: string }
  connections: { variable: string }[]
  search_term: string
  search_result_items: [GVK]
  gvk: GVK
  namespaces: [string]
  namespace: string
  resources: [string]
  resource: string
}
