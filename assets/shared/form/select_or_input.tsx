import Input from './input'
import Select from './select'

type SelectOrInputProps = {
  name: string
  label: string
  options: { value: string; label: string }[]
  selectedOption?: string
  onChange: (option: string) => void
  className?: string
  orientation?: 'horiz' | 'vert'
}

const SelectOrInput = (props: SelectOrInputProps) => {
  if (props.options.length > 0) {
    return <Select {...props} />
  } else {
    return <Input {...props} defaultValue={props.selectedOption} />
  }
}
export default SelectOrInput
