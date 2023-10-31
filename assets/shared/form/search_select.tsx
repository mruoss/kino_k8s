import classNames from 'classnames'
import { debounce } from '../utils'

type SearchInputProps = {
  name: string
  selectedValue: string
  searchTerm: string
  onSearch: (searchTerm: string) => void
  placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  selectedValue,
  searchTerm,
  onSearch,
  placeholder,
}: SearchInputProps) => {
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
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classNames('h-5 w-5', {
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
          placeholder={placeholder}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLocalSearchTerm(e.target.value)
            performSearch(e.target.value)
          }}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-9 text-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </>
  )
}

type SearchResultProps<ItemType> = {
  resultItems: [ItemType]
  itemRenderer: (item: ItemType) => React.JSX.Element
  onSelect: (item: ItemType) => void
  resultItemsKeyField: keyof ItemType
}

const SearchResult = <ItemType,>({
  resultItems,
  itemRenderer,
  onSelect,
  resultItemsKeyField,
}: SearchResultProps<ItemType>) => {
  return (
    <div className="max-h-36 overflow-auto rounded-b-lg border-b border-l border-r border-gray-300">
      <div className="w-max min-w-full">
        {resultItems.map((item) => (
          <div
            key={item[resultItemsKeyField] as string}
            onClick={() => onSelect(item)}
            className="border-b-solid last:border-b-none cursor-pointer border-b border-b-gray-300 bg-gray-50 px-2 py-0.5 hover:bg-blue-600 hover:text-white"
          >
            {itemRenderer(item)}
          </div>
        ))}
      </div>
    </div>
  )
}

type SearchSelectProps = { label: string; className: string }

const SearchSelect = <ItemType,>({
  name,
  label,
  searchTerm,
  onSearch,
  resultItems,
  resultItemsKeyField,
  itemRenderer,
  className,
  onSelect,
  selectedValue,
  placeholder,
}: SearchInputProps & SearchResultProps<ItemType> & SearchSelectProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <SearchInput
        name={name}
        onSearch={onSearch}
        searchTerm={searchTerm}
        selectedValue={selectedValue}
        placeholder={placeholder}
      />
      {(resultItems && resultItems.length) > 0 && (
        <SearchResult
          resultItems={resultItems}
          itemRenderer={itemRenderer}
          onSelect={onSelect}
          resultItemsKeyField={resultItemsKeyField}
        />
      )}
    </div>
  )
}

export default SearchSelect
