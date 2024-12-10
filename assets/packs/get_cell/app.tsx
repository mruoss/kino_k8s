import React from 'react'

import useFieldsState from '../../shared/field_state'
import Input from '../../shared/input'
import { KinoContext } from '../../shared/kino'
import Select from '../../shared/select'
import { GetCellFields } from './types'
import ReadOperationForm from './read_operation_form'
import ConnectOperationForm from './connect_operation_form'

const READ_OPERATIONS = ['get', 'list', 'watch']
const CONNECT_OPERATIONS = ['exec', 'logs']

export interface AppProps {
  payload: { fields: GetCellFields }
  ctx: KinoContext
}

const App: React.FC<AppProps> = ({ payload, ctx }) => {
  const [fields, updateField] = useFieldsState(ctx, payload.fields)

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
          />
        </div>
        {READ_OPERATIONS.includes(fields.operation) && (
          <ReadOperationForm fields={fields} updateField={updateField} />
        )}
        {CONNECT_OPERATIONS.includes(fields.operation) && (
          <ConnectOperationForm fields={fields} updateField={updateField} />
        )}
      </div>
    </>
  )
}

export default App
