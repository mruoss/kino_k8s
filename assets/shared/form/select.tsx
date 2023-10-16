import Field from "./field";

const Select = ({
  name,
  label,
  options,
  selectedOption,
  onChange,
  fieldClasses,
}) => (
  <Field name={name} label={label} className={fieldClasses}>
    <select
      name={name}
      className="input"
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option value={option.value} selected={option.value == selectedOption}>
          {option.label}
        </option>
      ))}
    </select>
  </Field>
);

export default Select;
