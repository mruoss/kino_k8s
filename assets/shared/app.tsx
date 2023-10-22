import { PropsWithChildren } from 'react'
import { KinoContext } from '../kino'

type UpdateAttrFun<AttrsType> = (
  attrName: string,
) => (AttrValue: AttrsType[keyof AttrsType]) => void

export const useAttrsState = <AttrsType extends {}>(
  ctx: KinoContext<AttrsType>,
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

export const AppContainer = ({ children }: PropsWithChildren) => (
  <div className="flex p-2 rounded-md bg-blue-100 border-gray-300 border border-solid font-inter font-medium text-gray-600">
    {children}
  </div>
)
