const Select = ({ name, label, options, selectedOption, onChange }) => (
  <>
    <label htmlFor={name} className="block mb-1 text-sm font-medium">
      {label}
    </label>
    <select
      id={name}
      defaultValue={selectedOption}
      onChange={(e) => onChange(e!.target!.value)}
      className="bg-gray-50 bg-caret-down bg-no-repeat bg-[center_right_10px] bg-[length:10px] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pr-5 appearance-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </>
)

export default Select
