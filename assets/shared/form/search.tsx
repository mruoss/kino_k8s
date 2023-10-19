import classNames from 'classnames'
import debounce from 'debounce'

const SearchInput = ({
  name,
  label,
  searchTerm,
  searchResultTimestamp,
  onSearch,
}) => {
  const [loading, setLoading] = React.useState(false)
  const performSearch = (searchTerm) => {
    setLoading(true)
    onSearch(searchTerm)
  }
  React.useEffect(() => setLoading(false), [searchResultTimestamp])
  return (
    <>
      <label htmlFor={name} className="block mb-1 text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classNames('w-4 h-4', { 'animate-spin': loading })}
          >
            {loading ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
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
          defaultValue={searchTerm}
          name={name}
          onChange={debounce((event) => performSearch(event.target.value), 300)}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-8"
        />
      </div>
    </>
  )
}

const SearchResult = ({ searchResult }) => {
  return (
    <div>
      {searchResult.map((item) => (
        <div></div>
      ))}
    </div>
  )
}

const Search = ({
  name,
  label,
  searchTerm,
  onSearch,
  searchResultTimestamp,
  searchResult = [],
}) => {
  return (
    <>
      <SearchInput
        name={name}
        label={label}
        onSearch={onSearch}
        searchResultTimestamp={searchResultTimestamp}
        searchTerm={searchTerm}
      />
      {searchResult.length > 0 && <SearchResult searchResult={searchResult} />}
    </>
  )
}

export default Search
