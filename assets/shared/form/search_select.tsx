import classNames from 'classnames'
import debounce from 'debounce'

const SearchInput = ({
  name,
  selectedValue,
  searchTerm,
  searchResultTimestamp,
  onSearch,
}) => {
  const performSearch = debounce((searchTerm) => {
    onSearch(searchTerm.toLowerCase())
  }, 300)
  const [localSearchTerm, setLocalSearchTerm] = React.useState(searchTerm ?? '')
  React.useEffect(() => {
    selectedValue && setLocalSearchTerm(selectedValue)
  }, [selectedValue])
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classNames('w-5 h-5', {
              'bg-green-200': selectedValue,
              'text-green-800': selectedValue,
              'border-green-800': selectedValue,
              'rounded-lg': selectedValue,
            })}
          >
            {selectedValue ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            )}
          </svg>
        </div>
        <input
          type="text"
          value={localSearchTerm}
          name={name}
          autoComplete="off"
          onInput={(e) => {
            setLocalSearchTerm(e.target.value)
            performSearch(e.target.value)
          }}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-9"
        />
      </div>
    </>
  )
}

const SearchResult = ({ resultItems, itemRenderer, onSelect }) => {
  return (
    <div className="max-h-36 overflow-auto rounded-b-lg">
      <div className="w-max min-w-full">
        {resultItems.map((item) => (
          <div
            key={item.index}
            onClick={() => onSelect(item)}
            className="px-2 py-0.5 cursor-pointer bg-gray-50 hover:bg-blue-600 hover:text-white border-b border-b-solid border-b-gray-300 last:border-b-none"
          >
            {itemRenderer(item)}
          </div>
        ))}
      </div>
    </div>
  )
}

const SearchSelect = ({
  name,
  label,
  searchTerm,
  onSearch,
  searchResultTimestamp,
  resultItems,
  itemRenderer,
  className,
  onSelect,
  selectedValue,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block mb-1 text-sm font-medium">
        {label}
      </label>
      <SearchInput
        name={name}
        onSearch={onSearch}
        searchResultTimestamp={searchResultTimestamp}
        searchTerm={searchTerm}
        selectedValue={selectedValue}
      />
      {resultItems && (
        <SearchResult
          resultItems={resultItems}
          itemRenderer={itemRenderer}
          onSelect={onSelect}
        />
      )}
    </div>
  )
}

export default SearchSelect
