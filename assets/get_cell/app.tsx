import { GETCellAttrs } from './types'
import { KinoContext } from '../kino'
import useAttrsState from '../shared/attr_state'
import Select from '../shared/form/select'
import SearchSelect from '../shared/form/search_select'
import Input from '../shared/form/input'
import GVKOption from './gvk_option'

interface AppProps {
  initialAttrs: GETCellAttrs
  ctx: KinoContext<GETCellAttrs>
}

const App = ({ initialAttrs, ctx }: AppProps) => {
  const [attrs, updateAttr] = useAttrsState<GETCellAttrs>(ctx, initialAttrs)
  return (
    <div className="rounded-md  border-gray-300 border border-solid font-inter font-medium text-gray-600">
      <div className="p-3 bg-blue-100 border-b border-b-solid border-b-gray-300">
        <Input
          label="Assign To"
          name="assign_to"
          defaultValue={attrs['result_variable']}
          onChange={updateAttr('result_variable')}
        />
      </div>
      <div className="p-3 flex space-x-4">
        <SearchSelect
          className="max-w-full"
          name="gvk"
          label="Resource Kind"
          onSearch={updateAttr('search_term')}
          searchTerm={attrs['search_term']}
          searchResultTimestamp={attrs['search_result_timestamp']}
          resultItems={attrs['search_result_items']}
          onSelect={updateAttr('gvk')}
          itemRenderer={(item) => <GVKOption gvk={item} />}
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
