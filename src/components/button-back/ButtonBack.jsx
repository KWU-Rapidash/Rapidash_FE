import './ButtonBack.css'

function ButtonBack({
  type = 'button',
  ariaLabel = '뒤로가기',
  onClick,
  disabled = false,
}) {
  return (
    <button
      className="button-back"
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button-back__icon" aria-hidden="true" />
    </button>
  )
}

export default ButtonBack