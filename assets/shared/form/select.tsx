import classNames from 'classnames'

const Select = ({
  name,
  label,
  options,
  selectedOption,
  onChange,
  className,
}) => (
  <div className={className}>
    <label htmlFor={name} className="mb-1 block text-sm font-medium">
      {label}
    </label>
    <select
      id={name}
      defaultValue={selectedOption}
      onChange={(e) => onChange(e!.target!.value)}
      className="bg-caret-down block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500"
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
