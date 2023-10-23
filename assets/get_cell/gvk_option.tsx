export const GVKOption = ({ gvk }) => (
  <>
    <div className="text-xs text-gray-400">{gvk.api_version}</div>
    <div className="text-sm">{gvk.kind}</div>
  </>
)

export default GVKOption
