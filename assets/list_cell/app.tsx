import { KinoContext } from '../kino'
import useAttrsState from '../shared/attr_state'
import ConnNotice from '../shared/conn_notice'
import Input from '../shared/form/input'
import SearchSelect from '../shared/form/search_select'
import Select from '../shared/form/select'
import GVKOption from '../shared/gvk_option'
import { GVK } from '../shared/types'
import { ListCellAttrs } from './types'

interface AppProps {
  initialAttrs: ListCellAttrs
  ctx: KinoContext
}

const App: React.FC<AppProps> = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = useAttrsState(ctx, initialAttrs)

  return (
    <>
      {!attrs.connection && <ConnNotice />}
      <div className="rounded-md border border-solid border-gray-300 font-inter font-medium text-gray-600">
        <div className="border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3">
          <Select
            name="connection"
            label="Connection"
            options={attrs.connections.map((connection) => ({
              label: connection.variable,
              value: connection.variable,
            }))}
            selectedOption={attrs.connection?.variable?.toString()}
            onChange={updateAttr('connection')}
            orientation="horiz"
          />
          <Select
            name="request_type"
            label="Request Type"
            options={attrs.request_types.map((request_type) => ({
              label: request_type.toUpperCase(),
              value: request_type,
            }))}
            selectedOption={attrs.request_type}
            onChange={updateAttr('request_type')}
            orientation="horiz"
          />
          <Select
            name="result_type"
            label="Result Type"
            options={attrs.result_types[attrs.request_type].map(
              (result_type) => ({
                label: result_type.toUpperCase(),
                value: result_type,
              }),
            )}
            selectedOption={attrs.result_type}
            onChange={updateAttr('result_type')}
            orientation="horiz"
          />
          <Input
            label="Assign To"
            name="assign_to"
            defaultValue={attrs['result_variable']}
            onChange={updateAttr('result_variable')}
            orientation="horiz"
          />
        </div>
        <div className="flex gap-x-5 p-3">
          {attrs.connection && (
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
              placeholder="apps/v1 Deployment"
            />
          )}
          {attrs.namespaces && (
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
        </div>
      </div>
    </>
  )
}

export default App
