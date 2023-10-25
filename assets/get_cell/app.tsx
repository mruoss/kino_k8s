import { KinoContext } from '../kino'
import useAttrsState from '../shared/attr_state'
import Input from '../shared/form/input'
import SearchSelect from '../shared/form/search_select'
import Select from '../shared/form/select'
import GVKOption from './gvk_option'
import { GETCellAttrs, GVK } from './types'

interface AppProps {
  initialAttrs: GETCellAttrs
  ctx: KinoContext
}

const App = ({ initialAttrs, ctx }: AppProps) => {
  const [attrs, updateAttr] = useAttrsState<GETCellAttrs>(ctx, initialAttrs)
  return (
    <div className="font-inter rounded-md border border-solid border-gray-300 font-medium text-gray-600">
      <div className="border-b-solid border-b border-b-gray-300 bg-blue-100 p-3">
        <Input
          label="Assign To"
          name="assign_to"
          defaultValue={attrs['result_variable']}
          onChange={updateAttr('result_variable')}
        />
      </div>
      <div className="flex space-x-4 p-3">
        <SearchSelect<GVK>
          className="max-w-full"
          name="gvk"
          label="Resource Kind"
          onSearch={updateAttr('search_term')}
          searchTerm={attrs['search_term']}
          resultItemsKeyField={'index'}
          resultItems={attrs['search_result_items']}
          onSelect={updateAttr('gvk')}
          itemRenderer={(item: GVK) => <GVKOption gvk={item} />}
          selectedValue={attrs['gvk']?.kind}
        />
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
        {attrs['resources'] && (
          <Select
            name="resource"
            label="Resource Name"
            options={attrs.resources.map((ns) => ({
              label: ns,
              value: ns,
            }))}
            selectedOption={attrs['resource']}
            onChange={updateAttr('resource')}
          />
        )}
      </div>
    </div>
  )
}

export default App
