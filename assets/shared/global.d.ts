import React from 'react'
import { Terminal as TerminalType } from 'xterm'

interface RootOptions {
  /**
   * Prefix for `useId`.
   */
  identifierPrefix?: string
  onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void
}

export interface ErrorInfo {
  digest?: string
  componentStack?: string
}

export interface Root {
  render(children: React.ReactNode): void
  unmount(): void
}

declare global {
  const DEBUG: boolean
  const Terminal: typeof TerminalType
}
