import { Attributes, GVK } from '../shared/types'

export interface ListCellAttrs extends Attributes {
  connection?: { variable: string }
  connections: { variable: string }[]
  result_type: string
  result_types: string[]
  search_term: string
  search_result_items: [GVK]
  gvk: GVK
  namespaces?: [string]
  namespace: string
}
