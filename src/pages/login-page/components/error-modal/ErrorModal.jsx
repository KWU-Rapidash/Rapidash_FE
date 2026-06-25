import './ErrorModal.css'

function ErrorModal({ onClose }) {
  return (
    <div className='errorModal__overlay' onClick={onClose}>
      <div className='errorModal__container' onClick={(e) => e.stopPropagation()}>
        <div className='errorModal__text--title cancelModal__text'>아이디/비밀번호 오류</div>
        <div className='errorModal__text'>
          <div className='errorModal__text--message'>
            입력한 아이디 혹은 비밀번호가 올바르지 않습니다.
          </div>
          <div className='errorModal__text--message'>다시 시도해주세요.</div>
        </div>
        <div className='errorModal__button' onClick={onClose}>
          확인
        </div>
      </div>
    </div>
  )
}

export default ErrorModal
