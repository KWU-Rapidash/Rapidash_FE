import './ButtonBold.css'

function ButtonBold({ content, onClick }) {
  return (
    <div className='buttonBold' onClick={onClick}>
      {content}
    </div>
  )
}

export default ButtonBold
