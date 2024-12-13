import { Fields, GVK } from '../../shared/types'

export interface GetCellFields extends Fields {
  contexts: string[]
  context: string
  operation: string
  operations: string[]
  result_type: string
  result_types: { [key: string]: string[] | null }
  search_term: string
  search_result_items: [GVK]
  gvk: GVK
  namespaces?: [string]
  namespace: string
  resources?: [string]
  resource?: string
  containers?: [string]
  container?: string
}

export interface ConnectionState {
  message?: string
  state: 'error' | 'loading' | 'ok'
}
