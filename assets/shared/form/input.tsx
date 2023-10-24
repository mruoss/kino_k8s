const Input = ({ name, label, onChange, defaultValue }) => {
  return (
    <div className="flex flex-row items-baseline">
      <label
        htmlFor={name}
        className="mb-1 block pr-1 text-sm font-medium uppercase"
      >
        {label}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className=" block rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  )
}

export default Input
