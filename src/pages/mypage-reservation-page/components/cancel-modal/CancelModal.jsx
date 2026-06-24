function CancelModal({ onClose }) {
  return (
    <div className='cancelModal__overlay'>
      <div className='cancelModal__container'>
        Are you sure you want to cancel this reservation?
      </div>
    </div>
  )
}

export default CancelModal
