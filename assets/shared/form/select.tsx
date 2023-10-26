import classNames from 'classnames'

type SelectProps<ValueType> = {
  name: string
  label: string
  options: { value: ValueType; label: string }[]
  selectedOption: ValueType
  onChange: (option: string) => void
  className?: string
  orientation?: 'horiz' | 'vert'
}

const Select = <ValueType,>({
  name,
  label,
  options,
  selectedOption,
  onChange,
  className = '',
  orientation = 'vert',
}: SelectProps<ValueType>) => (
  <div
    className={classNames(
      {
        'flex flex-row items-baseline': orientation == 'vert',
      },
      className,
    )}
  >
    <label
      htmlFor={name}
      className={classNames(
        {
          block: orientation == 'horiz',
          'pr-1 uppercase': orientation == 'vert',
        },
        'mb-1 text-sm font-medium',
      )}
    >
      {label}
    </label>
    <select
      id={name}
      defaultValue={selectedOption}
      onChange={(e) => onChange(e!.target!.value)}
      className={classNames(
        { 'block w-full': orientation == 'horiz' },
        ' appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-caret-down bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500',
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
