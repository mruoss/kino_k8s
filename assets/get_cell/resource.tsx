export const ResourceOption = ({ resource }) => (
  <>
    <span className="text-sm">{resource.kind}</span>
    <span className="ml-2 px-1.5 text-xs text-yellow-700 bg-yellow-50 border rounded-md border-yellow-600">
      {resource.api_version}
    </span>
  </>
)
