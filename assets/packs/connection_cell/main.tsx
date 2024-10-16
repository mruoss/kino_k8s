import './main.css'

import React from 'react'
import Error from '../../shared/error'
import { KinoContext } from '../../shared/kino'
import App from './app'
import { ConnectionCellAttrs } from './types'
import { createRoot } from 'react-dom/client'

export const init = async (
  ctx: KinoContext,
  attrs: ConnectionCellAttrs,
): Promise<void> => {
  ctx.root.innerHTML = 'loading...'

  ctx.importCSS('main.css')
  ctx.importCSS(
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap',
  )

  const root = createRoot(ctx.root)
  if (attrs.error) {
    return root.render(<Error message={attrs.error} />)
  }

  root.render(<App initialAttrs={attrs} ctx={ctx} />)
}
