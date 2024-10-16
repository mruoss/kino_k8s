import React from 'react'

import useAttrsState from '../../shared/attr_state'
import ConnNotice from '../../shared/conn_notice'
import Input from '../../shared/input'
import { KinoContext } from '../../shared/kino'
import Select from '../../shared/select'
import { ApplyCellAttrs } from './types'

interface AppProps {
  initialAttrs: ApplyCellAttrs
  ctx: KinoContext
}

const App: React.FC<AppProps> = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = useAttrsState(ctx, initialAttrs)

  return (
    <>
      {!attrs.connection && <ConnNotice />}
      <div className="font-inter rounded-md border-t border-solid border-gray-300 font-medium text-gray-600">
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
            name="method"
            label="Method"
            options={attrs.methods.map((method) => ({
              label: method.toUpperCase(),
              value: method,
            }))}
            selectedOption={attrs.method}
            onChange={updateAttr('method')}
            orientation="horiz"
          />
          <Input
            label="Assign To"
            name="assign_to"
            defaultValue={attrs['result_variable']}
            onChange={updateAttr('result_variable')}
            orientation="horiz"
          />
        </div>
      </div>
    </>
  )
}

export default App
