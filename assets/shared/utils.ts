import { KinoContext } from '../kino'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  timeout: number,
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, timeout)
  }
}

export const loadReact = async (ctx: KinoContext): Promise<void> => {
  if (DEBUG) {
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js',
    )
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.js',
    )
  } else {
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js',
    )
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js',
    )
  }
}
