import './MypageReservationPage.css'

import { useState, useEffect } from 'react'

import ButtonBold from '../../../components/button-bold/ButtonBold'
import CancelModal from '../components/cancel-modal/CancelModal'
import { getReservationInfo } from '../apis/reservationInfo'
import { getMyInfo } from '../../mypage-account-page/apis/myInfo'

function MypageReservationPage() {
  const [showCancelModal, setShowCancelModal] = useState(false)

  const [reservation, setReservation] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchReservationInfo = async () => {
      const data = await getReservationInfo()
      setReservation(data)
    }

    fetchReservationInfo()

    const fetchMyInfo = async () => {
      const data = await getMyInfo()
      setUser(data)
    }

    fetchMyInfo()
  }, [])
  if (!reservation) return null
  if (!user) return null

  const isReserved = reservation.status === 'RESERVED'

  const handleCancel = () => {
    setShowCancelModal(true)
  }

  return (
    <>
      <div className='mypageReservation__container'>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>날짜</div>
          <div className='mypageReservation__value'>{isReserved ? reservation.date : '-'}</div>
        </div>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>강의실</div>
          <div className='mypageReservation__value'>
            {isReserved ? `${reservation.classroom}호` : '-'}
          </div>
        </div>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>예약자 정보</div>
          <div className='mypageReservation__value'>
            {isReserved ? `${user.klasId} ${user.name}` : '-'}
          </div>
        </div>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>시간</div>
          <div className='mypageReservation__value'>
            {isReserved ? `${reservation.startTime} ~ ${reservation.endTime}` : '-'}
          </div>
        </div>
      </div>
      <ButtonBold content='예약취소' onClick={handleCancel} disabled={isReserved ? false : true} />
      {showCancelModal && <CancelModal onClose={() => setShowCancelModal(false)} />}
    </>
  )
}

export default MypageReservationPage
