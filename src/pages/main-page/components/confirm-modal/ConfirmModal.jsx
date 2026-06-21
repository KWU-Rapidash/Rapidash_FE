import './ConfirmModal.css'

export default function ConfirmModal() {
  return (
    <div className='confirm-modal__overlay'>
      <div className='confirm-modal'>
        <div className='confirm-modal__title'>예약이 확정되었습니다</div>
        <p className='confirm-modal__desc'>예약정보와 취소는 마이페이지에서 가능합니다</p>
      </div>
    </div>
  )
}
