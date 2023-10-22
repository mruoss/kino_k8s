export const ResourceOption = ({ resource }) => (
  <>
    <div className="text-xs text-gray-400">{resource.api_version}</div>
    <div className="text-sm">{resource.kind}</div>
  </>
)
