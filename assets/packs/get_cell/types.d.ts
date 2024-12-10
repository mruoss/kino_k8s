import { KinoContext } from '../../shared/kino'
import { Fields, GVK } from '../../shared/types'

export interface GetCellFields extends Fields {
  contexts: string[]
  context: string
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
