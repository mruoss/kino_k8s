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
    <SearchSelect<GVK>
      className="opacity-60"
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
      disabled={true}
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
        label={fields.gvk.kind}
        options={fields.resources.map((resource) => ({
          label: resource,
          value: resource,
        }))}
        selectedOption={fields.resource}
        onChange={updateField('resource')}
      />
    )}
    {fields.containers && (
      <SelectOrInput
        name="container"
        label="Container"
        options={fields.containers.map((container) => ({
          label: container,
          value: container,
        }))}
        selectedOption={fields.container}
        onChange={updateField('container')}
      />
    )}
  </div>
)

export default ConnectOperationForm
