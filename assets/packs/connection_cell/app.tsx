import React from 'react'

import useAttrsState from '../../shared/attr_state'
import Input from '../../shared/input'
import { KinoContext } from '../../shared/kino'
import Select from '../../shared/select'
import { ConnectionCellAttrs } from './types'

interface AppProps {
  initialAttrs: ConnectionCellAttrs
  ctx: KinoContext
}

const App: React.FC<AppProps> = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = useAttrsState(ctx, initialAttrs)
  const source_type_options = [
    { label: 'File', value: 'file' },
    { label: 'Environment Variable', value: 'env' },
  ]
  // if (attrs['running_on_k8s'])
  source_type_options.push({ label: 'K8s Service Account', value: 'k8s' })

  return (
    <div className="font-inter rounded-md border border-solid border-gray-300 font-medium text-gray-600">
      <div className="border-b-solid flex flex-wrap gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3">
        <Select
          name="source_type"
          label="Source Type"
          options={source_type_options}
          selectedOption={attrs['source_type']}
          onChange={updateAttr('source_type')}
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
      <div className="flex flex-wrap gap-x-5 p-3">
        {attrs['source_type'] != 'k8s' && (
          <Input
            label={attrs['source_type'] == 'file' ? 'File Path' : 'Env Var'}
            name="source"
            defaultValue={attrs['source']}
            onChange={updateAttr('source')}
            orientation="vert"
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
            { label: 'Yes', value: 'true' },
            { label: 'No', value: 'false' },
          ]}
          selectedOption={attrs.opts.insecure_skip_tls_verify.toString()}
          onChange={(value) =>
            updateAttr('opts')({
              ...attrs.opts,
              insecure_skip_tls_verify: JSON.parse(value),
            })
          }
        />
      </div>
    </div>
  )
}

export default App
