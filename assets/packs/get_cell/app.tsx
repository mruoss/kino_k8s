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

interface AppProps {
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
        <div className="flex gap-x-5 p-3">
          <SearchSelect<GVK>
            className="max-w-full"
            name="gvk"
            label="Resource Kind"
            onSearch={updateField('search_term')}
            searchTerm={fields.search_term}
            resultItemsKeyField={'index'}
            resultItems={fields.search_result_items}
            onSelect={updateField('gvk')}
            itemRenderer={(item: GVK) => <GVKOption gvk={item} />}
            selectedValue={fields.gvk?.kind}
            placeholder="apps/v1 Deployment"
          />
          {fields.namespaces && (
            <SelectOrInput
              name="namespace"
              label="Namespace"
              options={fields.namespaces.map((ns) => ({
                label: ns,
                value: ns,
              }))}
              selectedOption={fields.namespace}
              onChange={updateField('namespace')}
            />
          )}
          {fields.resources && (
            <SelectOrInput
              name="resource"
              label="Resource Name"
              options={fields.resources.map((ns) => ({
                label: ns,
                value: ns,
              }))}
              selectedOption={fields.resource}
              onChange={updateField('resource')}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
