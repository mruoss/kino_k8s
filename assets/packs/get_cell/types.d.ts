import { Attributes, GVK } from '../../shared/types'

export interface ListCellAttrs extends Attributes {
  connection?: { variable: string }
  connections: { variable: string }[]
  request_type: string
  request_types: string[]
  result_type: string
  result_types: { [key: string]: string[] | null }
  search_term: string
  search_result_items: [GVK]
  gvk: GVK
  namespaces?: [string]
  namespace: string
  resources?: [string]
  resource?: string
}
