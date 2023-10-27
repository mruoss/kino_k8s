import { Attributes } from '../shared/types'

export interface ConnectionCellAttrs extends Attributes {
  source_type: string
  source: string
  running_on_k8s: boolean
  opts: {
    context?: string
    insecure_skip_tls_verify: boolean
  }
}
