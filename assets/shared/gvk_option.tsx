import React from 'react'
import { GVK } from './types'

export const GVKOption = ({ gvk }: { gvk: GVK }) => (
  <>
    <div className="text-xs text-gray-400">{gvk.api_version}</div>
    <div className="text-sm">
      {gvk.kind}
      {gvk.subresource && (
        <span className="pl-1 text-xs text-gray-400">
          sub: {gvk.subresource}
        </span>
      )}
    </div>
  </>
)

export default GVKOption
