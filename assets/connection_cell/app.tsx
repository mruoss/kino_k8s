import { KinoContext } from '../kino'
import useAttrsState from '../shared/attr_state'
import Input from '../shared/form/input'
import Select from '../shared/form/select'
import { ConnectionCellAttrs } from './types'

interface AppProps {
  initialAttrs: ConnectionCellAttrs
  ctx: KinoContext
}

const App = ({ initialAttrs, ctx }: AppProps) => {
  const [attrs, updateAttr] = useAttrsState<ConnectionCellAttrs>(
    ctx,
    initialAttrs,
  )
  const source_type_options = [
    { label: 'File', value: 'file' },
    { label: 'Environment Variable', value: 'env' },
  ]
  if (attrs['running_on_k8s'])
    source_type_options.push({ label: 'K8s Service Account', value: 'k8s' })

  return (
    <div className="rounded-md border border-solid border-gray-300 font-inter font-medium text-gray-600">
      <div className="border-b-solid flex flex-wrap justify-between gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3">
        <Input
          label="Assign To"
          name="assign_to"
          defaultValue={attrs['result_variable']}
          onChange={updateAttr('result_variable')}
        />
        <Select
          name="source_type"
          label="Source Type"
          options={source_type_options}
          selectedOption={attrs['source_type']}
          onChange={updateAttr('source_type')}
          orientation="horiz"
        />
        {attrs['source_type'] != 'k8s' && (
          <Input
            label={attrs['source_type'] == 'file' ? 'File Path' : 'Env Var'}
            name="source"
            defaultValue={attrs['source']}
            onChange={updateAttr('source')}
          />
        )}
        {attrs['source_type'] != 'k8s' && (
          <Input
            label="Context"
            name="context"
            defaultValue={attrs.opts.context || ''}
            onChange={(value) =>
              updateAttr('opts')({ ...attrs.opts, context: value })
            }
          />
        )}
        <Select
          name="insecure_skip_tls_verify"
          label="Insecure Skip TLS Verify"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
          selectedOption={attrs.opts.insecure_skip_tls_verify}
          onChange={(value) =>
            updateAttr('opts')({
              ...attrs.opts,
              insecure_skip_tls_verify: JSON.parse(value),
            })
          }
          orientation="horiz"
        />
      </div>
    </div>
  )
}

export default App
