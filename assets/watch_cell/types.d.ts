import { Attributes, GVK } from '../shared/types'

export interface WatchCellAttrs extends Attributes {
  connection?: { variable: string }
  connections: { variable: string }[]
  search_term: string
  search_result_items: [GVK]
  gvk: GVK
  namespaces?: [string]
  namespace: string
}
