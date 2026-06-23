import { useState, useEffect } from 'react'
import './MainPage.css'
import KwangwoonLogo from '../../../assets/header/kwangwoon-logo.svg'
import MypageIcon from '../../../assets/header/mypage-icon.svg'
import FilterBar from '../components/filter-bar/FilterBar'
import FloorMap from '../components/floor-map/FloorMap'
import ReservationModal from '../components/reservation-modal/ReservationModal'
import ConfirmModal from '../components/confirm-modal/ConfirmModal'
import { fetchRoomStatus } from '../apis/fetchRoomStatus'

export default function MainPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedFloor, setSelectedFloor] = useState('1층')
  const [roomStatus, setRoomStatus] = useState({})
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  // 날짜/시간/층 변경 시 예약 현황 조회
  useEffect(() => {
    if (!selectedDate || !selectedTime || !selectedFloor) return

    const loadRoomStatus = async () => {
      const status = await fetchRoomStatus({
        date: selectedDate,
        time: selectedTime,
        floor: selectedFloor,
      })
      setRoomStatus(status)
    }

    loadRoomStatus()
  }, [selectedDate, selectedTime, selectedFloor])

  // 강의실 클릭 시 예약 신청 모달 열기
  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId)
    setIsReservationOpen(true)
  }

  // 예약 신청 후 확정 모달 열기
  const handleConfirm = () => {
    setIsReservationOpen(false)
    setIsConfirmOpen(true)
  }

  return (
    <div className='main-page'>
      <div className='main-page__topbar'>
        <div className='main-page__topbar-inner'>
          <img className='main-page__topbar-logo' src={KwangwoonLogo} alt='광운대학교' />
          <button className='main-page__topbar-mypage' type='button'>
            <img src={MypageIcon} alt='마이페이지' />
          </button>
        </div>
      </div>

      <div className='main-page__content'>
        <FilterBar
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
          selectedFloor={selectedFloor}
          onFloorSelect={setSelectedFloor}
        />
        <FloorMap floor={selectedFloor} roomStatus={roomStatus} onRoomClick={handleRoomClick} />
      </div>

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onConfirm={handleConfirm}
        selectedRoom={selectedRoom}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
      <ConfirmModal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} />
    </div>
  )
}
