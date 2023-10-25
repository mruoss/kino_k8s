import { KinoContext } from '../kino'

type UpdateAttrFun<AttrsType> = (
  attrName: string,
) => (AttrValue: AttrsType[keyof AttrsType]) => void

const useAttrsState = <AttrsType extends object>(
  ctx: KinoContext,
  initialAttrs: AttrsType,
): [AttrsType, UpdateAttrFun<AttrsType>] => {
  const [attrs, setAttrs] = React.useState<AttrsType>(initialAttrs)
  const updateAttr: UpdateAttrFun<AttrsType> = (attrName) => (attrValue) => {
    setAttrs((attrs) => ({ ...attrs, [attrName]: attrValue }))
    ctx.pushEvent(`update_${attrName}`, attrValue)
  }

  React.useEffect(() => {
    ctx.handleEvent<AttrsType>('update', (updates) => {
      console.log('Attribute update from server', updates)
      setAttrs((attrs) => ({
        ...Object.assign(attrs, updates),
      }))
    })
  }, [])
  return [attrs, updateAttr]
}

export default useAttrsState
