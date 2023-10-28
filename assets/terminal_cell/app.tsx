import { KinoContext } from '../kino'
import useAttrsState from '../shared/attr_state'
import Select from '../shared/form/select'
import { TerminalCellAttrs } from './types'

interface AppProps {
  initialAttrs: TerminalCellAttrs
  ctx: KinoContext
}

const App = ({ initialAttrs, ctx }: AppProps) => {
  const [attrs, updateAttr] = useAttrsState(ctx, initialAttrs)
  return (
    <div className="rounded-md border border-solid border-gray-300 font-inter font-medium text-gray-600">
      <div className="border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3">
        <Select
          name="connection"
          label="Connection"
          options={attrs.connections.map((connection) => ({
            label: connection.variable,
            value: connection.variable,
          }))}
          selectedOption={attrs.connection?.variable?.toString()}
          onChange={updateAttr('connection')}
          orientation="horiz"
        />
        <Select
          name="connect_to"
          label="connect_to"
          options={attrs.connect_tos.map((connect_to) => ({
            label: connect_to,
            value: connect_to,
          }))}
          selectedOption={attrs.connect_to?.toString()}
          onChange={updateAttr('connect_to')}
          orientation="horiz"
        />
      </div>
      <div className="flex gap-x-5 p-3">
        {attrs['namespaces'] && (
          <Select
            name="namespace"
            label="Namespace"
            options={attrs.namespaces.map((ns) => ({
              label: ns,
              value: ns,
            }))}
            selectedOption={attrs['namespace']}
            onChange={updateAttr('namespace')}
          />
        )}
        {attrs.pods && (
          <Select
            name="pod"
            label="Pod Name"
            options={attrs.pods.map((ns) => ({
              label: ns,
              value: ns,
            }))}
            selectedOption={attrs['pod']}
            onChange={updateAttr('pod')}
          />
        )}
        {attrs.containers && (
          <Select
            name="container"
            label="Container Name"
            options={attrs.containers.map((ns) => ({
              label: ns,
              value: ns,
            }))}
            selectedOption={attrs['container']}
            onChange={updateAttr('container')}
          />
        )}
      </div>
    </div>
  )
}

export default App
