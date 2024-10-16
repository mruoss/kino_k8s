import { Attributes } from '../../shared/types'

export interface ApplyCellAttrs extends Attributes {
  connection?: { variable: string }
  connections: { variable: string }[]
  method: string
  methods: string[]
}
