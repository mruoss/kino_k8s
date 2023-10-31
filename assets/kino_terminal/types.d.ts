import { Attributes } from '../shared/types'

export interface ApplyCellAttrs extends Pick<Attributes, 'mix_env'> {
  buffer: string[]
}
