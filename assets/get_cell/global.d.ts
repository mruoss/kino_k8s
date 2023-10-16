import React from "react";

interface RootOptions {
  /**
   * Prefix for `useId`.
   */
  identifierPrefix?: string;
  onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
}

export interface ErrorInfo {
  digest?: string;
  componentStack?: string;
}

export interface Root {
  render(children: React.ReactNode): void;
  unmount(): void;
}

declare global {
  const React: typeof React;
  const ReactDOM: {
    createRoot: (
      container: Element | DocumentFragment,
      options?: RootOptions
    ) => Root;
  };
}
