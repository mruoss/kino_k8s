import React from 'react'
import SearchSelect from '../../shared/search_select'
import { GVK } from '../../shared/types'
import GVKOption from '../../shared/gvk_option'
import SelectOrInput from '../../shared/select_or_input'
import { UpdateFieldFun } from '../../shared/field_state'
import { GetCellFields } from './types'

const ConnectOperationForm: React.FC<{
  fields: GetCellFields
  updateField: UpdateFieldFun<GetCellFields>
}> = ({ fields, updateField }) => (
  <div className="flex gap-x-5 p-3">
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
        label={fields.gvk.kind}
        options={fields.resources.map((ns) => ({
          label: ns,
          value: ns,
        }))}
        selectedOption={fields.resource}
        onChange={updateField('resource')}
      />
    )}
  </div>
)

export default ConnectOperationForm
