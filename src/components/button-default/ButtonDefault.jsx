import './ButtonDefault.css'

function ButtonDefault({
  children = '버튼',
  type = 'button',
  onClick,
  disabled = false,
}) {
  return (
    <button
      className="button-default"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ButtonDefault