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
    <>
      <div>
        <Select
          name="type"
          label="Type"
          options={[{ label: 'GET', value: 'get' }]}
          selectedOption="get"
          onChange={(value) => console.log(value)}
        />
      </div>
      <div>
        <SearchSelect
          className="max-w-full pl-3 w-80"
          name="gvk"
          label="Resource Kind"
          onSearch={updateAttr('search_term')}
          searchTerm={attrs['search_term']}
          searchResultTimestamp={attrs['search_result_timestamp']}
          resultItems={attrs['search_result_items']}
          onSelect={updateAttr('gvk')}
          itemRenderer={(item) => <GVKOption key={item.index} gvk={item} />}
          selectedValue={attrs['gvk']?.kind}
        />
      </div>
    </>
  )
}

export default App
