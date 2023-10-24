const Input = ({ name, label, onChange, defaultValue }) => {
  return (
    <div className="flex flex-row items-baseline">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium uppercase pr-1"
      >
        {label}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className=" bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5"
      />
    </div>
  )
}

export default Input
