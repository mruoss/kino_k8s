import React from 'react'

import useFieldsState from '../../shared/field_state'
import ConnNotice from '../../shared/conn_notice'
import GVKOption from '../../shared/gvk_option'
import Input from '../../shared/input'
import { KinoContext } from '../../shared/kino'
import SearchSelect from '../../shared/search_select'
import Select from '../../shared/select'
import SelectOrInput from '../../shared/select_or_input'
import { GVK } from '../../shared/types'
import { GetCellFields } from './types'
import ReadRequestForm from './read_request_form'

const READ_REQUEST_TYPES = ['get', 'list', 'watch']

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
            name="request_type"
            label="Request Type"
            options={fields.request_types.map((request_type) => ({
              label: request_type.toUpperCase(),
              value: request_type,
            }))}
            selectedOption={fields.request_type}
            onChange={updateField('request_type')}
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
        {READ_REQUEST_TYPES.includes(fields.request_type) && (
          <ReadRequestForm fields={fields} updateField={updateField} />
        )}
      </div>
    </>
  )
}

export default App
