export interface KinoContext<AttrType> {
  root: HTMLElement;
  importCSS: (url: string) => Promise<void>;
  importJS: (url: string) => Promise<void>;
  handleEvent: <PayloadType>(
    event: String,
    callback: (payload: PayloadType) => any
  ) => void;
  pushEvent: <PayloadType>(event: String, payload: PayloadType) => void;
  handleSync: (callback: () => void) => void;
  selectSecret: (
    callback: (secretName: string) => void,
    preselectName: string
  ) => void;
}
