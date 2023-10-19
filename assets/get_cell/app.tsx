import { GETCellAttrs } from './types'
import { KinoContext } from '../kino'
import { useAttrsState } from '../shared/app'
import Select from '../shared/form/select'
import Search from '../shared/form/search'

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
        <Search
          name="resource"
          label="Resource"
          onSearch={updateAttr('search_term')}
          searchTerm={attrs['search_term']}
          searchResultTimestamp={attrs['search_result_timestamp']}
        />
      </div>
    </>
  )
}

export default App
