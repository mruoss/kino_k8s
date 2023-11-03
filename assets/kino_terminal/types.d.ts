import xterm from 'xterm'

import { Attributes } from '../shared/types'

export interface KinoTerminalAttrs extends Pick<Attributes, 'mix_env'> {
  buffer: string | Uint8Array
}

export declare namespace XTerm {
  type Terminal = xterm.Terminal
}
