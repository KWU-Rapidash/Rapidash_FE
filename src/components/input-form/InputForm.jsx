import './InputForm.css'

function InputForm({
  type = 'text',
  placeholder = '',
  value,
  name,
  id,
  leftIcon,
  rightIcon,
  onChange,
  disabled = false,
}) {
  return (
    <div className="input-form">
      {leftIcon && (
        <div className="input-form__left-icon" aria-hidden="true">
          {leftIcon}
        </div>
      )}

      <input
        className="input-form__input"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
      />

      {rightIcon && (
        <div className="input-form__right-icon" aria-hidden="true">
          {rightIcon}
        </div>
      )}
    </div>
  )
}

export default InputForm
