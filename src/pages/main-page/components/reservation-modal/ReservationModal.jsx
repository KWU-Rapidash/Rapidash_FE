import { useEffect, useState } from 'react'
import './ReservationModal.css'
import { fetchReservationInfo } from '../../apis/fetchReservationInfo'
import { postReservation } from '../../apis/postReservation'

export default function ReservationModal({
  isOpen,
  onClose,
  onConfirm,
  selectedRoom,
  selectedDate,
  selectedTime,
}) {
  const [studentId, setStudentId] = useState('')

  // 모달 열릴 때 예약자 정보 조회
  useEffect(() => {
    if (!isOpen) return

    const loadReservationInfo = async () => {
      const info = await fetchReservationInfo()
      setStudentId(info.studentId)
    }

    loadReservationInfo()
  }, [isOpen])

  if (!isOpen) return null

  // 날짜 포맷
  const formatDate = (date) => {
    if (!date) return ''
    const mm = date.getMonth() + 1
    const dd = date.getDate()
    return `${mm}/${dd}`
  }

  // 예약 신청 버튼 클릭
  const handleReservation = async () => {
    await postReservation({
      date: selectedDate,
      time: selectedTime,
      roomId: selectedRoom,
      studentId,
    })
    onConfirm()
  }

<<<<<<< HEAD
export default function ReservationModal() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 57a339e (design : 예약 신청 모달 마크업 (#20))
=======
>>>>>>> e5eb045 (feat : 예약 신청 모달 기능 구현 (#15))
  return (
    <div className='reservation-modal__overlay' onClick={onClose}>
      <div className='reservation-modal' onClick={(e) => e.stopPropagation()}>
        <div className='reservation-modal__title'>예약정보</div>

        <div className='reservation-modal__info'>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>날짜</span>
            <span className='reservation-modal__info-value'>{formatDate(selectedDate)}</span>
          </div>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>강의실</span>
            <span className='reservation-modal__info-value'>{selectedRoom}호</span>
          </div>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>예약자 정보</span>
            <span className='reservation-modal__info-value'>{studentId}</span>
          </div>
          <div className='reservation-modal__info-item'>
            <span className='reservation-modal__info-label'>시간</span>
            <span className='reservation-modal__info-value'>{selectedTime}</span>
          </div>
        </div>

        <button type='button' className='reservation-modal__btn' onClick={handleReservation}>
          예약신청
        </button>
      </div>
    </div>
  )
<<<<<<< HEAD
=======
  return null
>>>>>>> 869d6b7 (design : 메인 페이지 레이아웃 마크업 및 라우터 등록 (#27))
=======
>>>>>>> 57a339e (design : 예약 신청 모달 마크업 (#20))
}
