import './CancelModal.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function CancelModal({ onClose }) {
  const navigate = useNavigate()

  const handleCancel = () => {
    toast.success('예약이 취소되었습니다.')
    navigate('/main')
  }

  return (
    <div className='cancelModal__overlay'>
      <div className='cancelModal__container'>
        <div className='cancelModal__text'>
          <div className='cancelModal__title'>예약취소</div>
          <div className='cancelModal__message'>예약을 취소하시겠습니까?</div>
        </div>
        <div className='cancelModal__button'>
          <div className='cancelModal__button--back' onClick={onClose}>
            뒤로가기
          </div>
          <div className='cancelModal__button--cancel' onClick={handleCancel}>
            예약취소
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelModal
