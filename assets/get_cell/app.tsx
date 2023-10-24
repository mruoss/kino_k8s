import { GETCellAttrs } from './types'
import { KinoContext } from '../kino'
import { useAttrsState } from '../shared/app'
import Select from '../shared/form/select'
import SearchSelect from '../shared/form/search_select'
import GVKOption from './gvk_option'

interface AppProps {
  initialAttrs: GETCellAttrs
  ctx: KinoContext<GETCellAttrs>
}

const App = ({ initialAttrs, ctx }: AppProps) => {
  const [attrs, updateAttr] = useAttrsState<GETCellAttrs>(ctx, initialAttrs)
  return (
    <div class="flex space-x-4">
      <Select
        name="method"
        label="Method"
        options={[{ label: 'GET', value: 'GET' }]}
        selectedOption="get"
        onChange={updateAttr('method')}
      />
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
  )
}

export default App
