import { KinoContext } from '../kino'
import Error from '../shared/error'
import { loadReact } from '../shared/utils'
import App from './app'
import { TerminalCellAttrs } from './types'

export const init = async (
  ctx: KinoContext,
  attrs: TerminalCellAttrs,
): Promise<void> => {
  await loadReact(ctx, attrs)

  ctx.root.innerHTML = 'loading...'

  ctx.importCSS('main.css')
  ctx.importCSS(
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap',
  )

  const root = ReactDOM.createRoot(ctx.root)
  if (attrs.error) {
    return root.render(<Error message={attrs.error} />)
  }

  root.render(<App initialAttrs={attrs} ctx={ctx} />)
}
