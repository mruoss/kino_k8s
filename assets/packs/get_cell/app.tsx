import React, { useState } from 'react'

import useFieldsState from '../../shared/field_state'
import Input from '../../shared/input'
import { KinoContext } from '../../shared/kino'
import Select from '../../shared/select'
import { ConnectionState, GetCellFields } from './types'
import ReadOperationForm from './read_operation_form'
import ConnectOperationForm from './connect_operation_form'
import { RiLoader4Line } from '@remixicon/react'

const READ_OPERATIONS = ['get', 'list', 'watch']
const CONNECT_OPERATIONS = ['exec', 'logs']

export interface AppProps {
  payload: { fields: GetCellFields; connection_state: ConnectionState }
  ctx: KinoContext
}

const App: React.FC<AppProps> = ({ payload, ctx }) => {
  const [fields, updateField] = useFieldsState(ctx, payload.fields)
  const [connectionState, setConnectionState] = React.useState<ConnectionState>(
    payload.connection_state,
  )
  React.useEffect(
    () =>
      ctx.handleEvent<ConnectionState>('connectionState', setConnectionState),
    [],
  )
  return (
    <>
      <div className="font-inter rounded-md border border-solid border-gray-300 font-medium text-gray-600">
        <div className="border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3">
          <Select
            name="operation"
            label="Operation"
            options={fields.operations.map((operation) => ({
              label: operation.toUpperCase(),
              value: operation,
            }))}
            selectedOption={fields.operation}
            onChange={updateField('operation')}
            orientation="horiz"
          />
          <Input
            label="Assign To"
            name="assign_to"
            className="ml-auto"
            defaultValue={fields.result_variable}
            onChange={updateField('result_variable')}
            orientation="horiz"
          />
        </div>
        <div className="border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-gray-200 p-3">
          <Select
            name="context"
            label="Context"
            options={fields.contexts.map((ctx) => ({ label: ctx, value: ctx }))}
            selectedOption={fields.context}
            onChange={updateField('context')}
            orientation="vert"
            error={connectionState?.message}
          />
        </div>
        <>
          {connectionState?.state == 'loading' && (
            <span className="flex items-center gap-x-1 p-3">
              <RiLoader4Line size={32} className="animate-spin" /> Connecting to
              the cluster...
            </span>
          )}
          {connectionState?.state == 'ok' &&
            READ_OPERATIONS.includes(fields.operation) && (
              <ReadOperationForm fields={fields} updateField={updateField} />
            )}
          {connectionState?.state == 'ok' &&
            CONNECT_OPERATIONS.includes(fields.operation) && (
              <ConnectOperationForm fields={fields} updateField={updateField} />
            )}
        </>
      </div>
    </>
  )
}

export default App
