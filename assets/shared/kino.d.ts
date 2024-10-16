export interface KinoContext {
  root: HTMLElement
  importCSS: (url: string) => Promise<void>
  importJS: (url: string) => Promise<void>
  handleEvent: <PayloadType>(
    event: string,
    callback: (payload: PayloadType) => unknown,
  ) => void
  pushEvent: <PayloadType>(event: string, payload: PayloadType) => void
  handleSync: (callback: () => void) => void
  selectSecret: (
    callback: (secretName: string) => void,
    preselectName: string,
  ) => void
}
