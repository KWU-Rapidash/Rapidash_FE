import './ButtonBold.css'

function ButtonBold({ content, onClick }) {
  return (
    <div className='buttonBold__container'>
      <button className='buttonBold__button' onClick={onClick}>
        {content}
      </button>
    </div>
  )
}

export default ButtonBold
