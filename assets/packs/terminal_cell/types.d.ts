import { Attributes } from '../shared/types'

export interface TerminalCellAttrs extends Omit<Attributes, 'result_variable'> {
  connection?: { variable: string }
  connections: { variable: string }[]
  connect_tos: [string]
  connect_to?: string
  namespaces?: [string]
  namespace?: string
  pods?: [string]
  pod?: string
  containers?: [string]
  container?: string
}
