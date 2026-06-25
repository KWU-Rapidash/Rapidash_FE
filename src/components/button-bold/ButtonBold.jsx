import './ButtonBold.css'

function ButtonBold({ content, onClick, disabled = false }) {
  return (
    <div className='buttonBold__container'>
      <button className='buttonBold__button' onClick={onClick} disabled={disabled}>
        {content}
      </button>
    </div>
  )
}

export default ButtonBold
