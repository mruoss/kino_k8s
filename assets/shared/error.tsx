import React from 'react'

interface ErrorProps {
  message: string
}
const Error = ({ message }: ErrorProps) => (
  <>
    <div className="flex rounded-md border border-dashed border-red-700 bg-red-100 p-2">
      <svg
        className="h-6 w-6 flex-none text-red-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        ></path>
      </svg>
      <div className="font-inter px-2 text-sm font-medium text-red-700">
        {message}
      </div>
    </div>
  </>
)

export default Error
