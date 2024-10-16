import React from 'react'

const ConnNotice = () => (
  <div className="font-inter mb-5 rounded-md bg-gray-100 p-4 text-sm font-medium text-gray-500">
    <p>
      To make requests to the Kubernetes cluster, you need at least one
      connection to a cluster.
    </p>
    <p className="pt-1">
      To create a cluster connection, you can add the{' '}
      <span className="text-gray-600">Cluster Connection</span> smart cell.
    </p>
  </div>
)

export default ConnNotice
