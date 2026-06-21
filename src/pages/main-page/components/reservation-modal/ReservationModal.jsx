import './ReservationModal.css'

export default function ReservationModal() {
  return (
    <div className='reservation-modal__overlay'>
      <div className='reservation-modal'>
        <div className='reservation-modal__title'>예약정보</div>

        <div className='reservation-modal__info'>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>날짜</span>
            <span className='reservation-modal__info-value'>4/1</span>
          </div>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>강의실</span>
            <span className='reservation-modal__info-value'>101호</span>
          </div>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>예약자 정보</span>
            <span className='reservation-modal__info-value'>2024122243</span>
          </div>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>시간</span>
            <span className='reservation-modal__info-value'>18~19</span>
          </div>
        </div>

        <button type='button' className='reservation-modal__btn'>
          예약신청
        </button>
      </div>
    </div>
  )
}
