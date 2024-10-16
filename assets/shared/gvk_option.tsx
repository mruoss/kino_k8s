import React from 'react'
import { GVK } from './types'

export const GVKOption = ({ gvk }: { gvk: GVK }) => (
  <>
    <div className="text-xs text-gray-400">{gvk.api_version}</div>
    <div className="text-sm">{gvk.kind}</div>
  </>
)

export default GVKOption
