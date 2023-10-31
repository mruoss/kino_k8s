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

export const loadReact = async (
  ctx: KinoContext,
  attrs: Pick<Attributes, 'mix_env'>,
): Promise<void> => {
  if (attrs.mix_env == 'dev') {
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.js',
    )
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js',
    )
  } else {
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.js',
    )
    await ctx.importJS(
      'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
    )
  }
}
