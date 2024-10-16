import React from 'react'
import classNames from 'classnames'

type InputProps = {
  name: string
  label: string
  defaultValue?: string
  testId?: string
  onChange: (value: string) => void
  orientation?: 'horiz' | 'vert'
}
const Input: React.FC<InputProps> = ({
  name,
  label,
  defaultValue,
  testId,
  onChange,
  orientation = 'vert',
}) => {
  return (
    <div
      className={classNames({
        'flex flex-row items-baseline': orientation == 'horiz',
      })}
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
      <input
        type="text"
        data-testid={testId ?? name}
        value={defaultValue}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          { 'block w-full': orientation == 'vert' },
          'rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-sm focus:border-blue-500 focus:ring-blue-500',
        )}
      />
    </div>
  )
}

export default Input
