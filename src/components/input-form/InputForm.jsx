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
  onRightIconClick,
  rightIconAriaLabel = '아이콘 버튼',
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

      {rightIcon &&
        (onRightIconClick ? (
          <button
            className="input-form__right-icon input-form__right-button"
            type="button"
            aria-label={rightIconAriaLabel}
            onClick={onRightIconClick}
            disabled={disabled}
          >
            {rightIcon}
          </button>
        ) : (
          <div className="input-form__right-icon" aria-hidden="true">
            {rightIcon}
          </div>
        ))}
    </div>
  )
}

export default InputForm