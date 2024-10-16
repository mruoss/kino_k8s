import { KinoContext } from '../../shared/kino'
import { KinoTerminalAttrs } from './types'

export async function init(ctx: KinoContext, attrs: KinoTerminalAttrs) {
  await ctx.importCSS(
    'https://cdnjs.cloudflare.com/ajax/libs/xterm/5.5.0/xterm.min.css',
  )
  await ctx.importJS(
    'https://cdnjs.cloudflare.com/ajax/libs/xterm/5.5.0/xterm.js',
  )

  ctx.root.innerHTML = `
      <div id="k8s-terminal">
        <div class="k8s-xtermjs-container"></div>
      </div>
    `

  const rootContainer = ctx.root.querySelector<HTMLElement>(
    '.k8s-xtermjs-container',
  )

  if (rootContainer) {
    const k8s_xterm = new Terminal({ convertEol: true })
    k8s_xterm.onKey(({ key }) => ctx.pushEvent('key', key))
    k8s_xterm.open(rootContainer)
    ctx.handleEvent('print-terminal', (data: string) => k8s_xterm.write(data))
    ctx.handleEvent('dispose-terminal', () => k8s_xterm.dispose())
    k8s_xterm.write(attrs.buffer)
  }
}
