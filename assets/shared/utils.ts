import { KinoContext } from '../kino'
import { Attributes } from './types'

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

export const loadReact = async <T>(
  ctx: KinoContext,
  attrs: Attributes,
): Promise<void> => {
  if (attrs.mix_env == 'prod') {
    await ctx.importJS('https://unpkg.com/react@18/umd/react.production.min.js')
    await ctx.importJS(
      'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
    )
  } else {
    await ctx.importJS('https://unpkg.com/react@18/umd/react.development.js')
    await ctx.importJS(
      'https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js',
    )
  }
}
