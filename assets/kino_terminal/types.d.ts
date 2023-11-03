import xterm from 'xterm'

export interface KinoTerminalAttrs {
  buffer: string | Uint8Array
}

export declare namespace XTerm {
  type Terminal = xterm.Terminal
}
