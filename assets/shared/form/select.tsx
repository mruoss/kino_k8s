import classNames from 'classnames'

type SelectProps = {
  name: string
  label: string
  options: { value: string; label: string }[]
  selectedOption?: string
  onChange: (option: string) => void
  className?: string
  orientation?: 'horiz' | 'vert'
}

const Select = ({
  name,
  label,
  options,
  selectedOption,
  onChange,
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
    <select
      id={name}
      value={selectedOption || undefined}
      onChange={(e) => onChange(e!.target!.value)}
      className={classNames(
        { 'block w-full': orientation == 'vert' },
        ' bg-caret-down appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500',
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

export default Select
