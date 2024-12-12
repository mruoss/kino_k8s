import { RiArrowDownSLine } from '@remixicon/react'
import classNames from 'classnames'
import React from 'react'

type SelectProps = {
  name: string
  label: string
  options: { value: string; label: string }[]
  selectedOption?: string
  onChange: (option: string) => void
  className?: string
  orientation?: 'horiz' | 'vert'
  error?: string
}

const Select = ({
  name,
  label,
  options,
  selectedOption,
  onChange,
  error,
  className = '',
  orientation = 'vert',
}: SelectProps) => (
  <div
    className={classNames(
      {
        'flex flex-row items-baseline': orientation == 'horiz',
      },
      className,
    )}
  >
    <label
      htmlFor={name}
      className={classNames(
        {
          block: orientation == 'vert',
          'pr-1 uppercase': orientation == 'horiz',
        },
        'mb-1 text-sm font-medium',
      )}
    >
      {label}
    </label>
    <div className="relative block">
      <select
        id={name}
        value={selectedOption || undefined}
        onChange={(e) => onChange(e!.target!.value)}
        className={classNames(
          { 'block w-full': orientation == 'vert' },
          'appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500',
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <RiArrowDownSLine size={16} />
      </div>
    </div>
    {error && <span className="text-sm text-red-500">{error}</span>}
  </div>
)

export default Select
