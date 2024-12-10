import React from 'react'
import { KinoContext } from './kino'

type UpdateFieldFun<FieldsType> = (
  fieldName: string,
) => (FieldValue: FieldsType[keyof FieldsType]) => void

const useFieldsState = <FieldsType extends object>(
  ctx: KinoContext,
  initialFields: FieldsType,
): [FieldsType, UpdateFieldFun<FieldsType>] => {
  const [fields, setFields] = React.useState<FieldsType>(initialFields)
  const updateField: UpdateFieldFun<FieldsType> =
    (fieldName) => (fieldValue) => {
      setFields((fields) => ({ ...fields, [fieldName]: fieldValue }))
      console.log('Pushing ${fieldName} to server', fieldValue)
      ctx.pushEvent('update_field', { field: fieldName, value: fieldValue })
    }

  React.useEffect(() => {
    ctx.handleEvent<FieldsType>('update', (updates) => {
      console.log('Fieldibute update from server', updates)
      setFields((fields) => ({
        ...Object.assign(fields, updates),
      }))
    })
  }, [])
  return [fields, updateField]
}

export default useFieldsState
