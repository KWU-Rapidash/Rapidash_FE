import { useState, useEffect } from 'react'
import './MainTest.css'
import FilterBar from '../main-page/components/filter-bar/FilterBar'
import FloorMap from '../main-page/components/floor-map/FloorMap'
import ReservationModal from '../main-page/components/reservation-modal/ReservationModal'
import ConfirmModal from '../main-page/components/confirm-modal/ConfirmModal'
import { fetchRoomStatus } from '../main-page/apis/fetchRoomStatus'
import { useNavigate } from 'react-router-dom'

export default function MainTest() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedFloor, setSelectedFloor] = useState('1층')
  const [roomStatus, setRoomStatus] = useState({})
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const navigate = useNavigate()

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

  const handleRoomClick = (roomId) => {
    if (!selectedDate || !selectedTime || !selectedFloor) {
      alert('날짜, 시간, 층을 모두 선택해주세요.')
      return
    }

    setSelectedRoom(roomId)
    setIsReservationOpen(true)
  }

  // 예약 신청 후 확정 모달 열기
  const handleConfirm = () => {
    setIsReservationOpen(false)
    setIsConfirmOpen(true)
  }

  return (
    <div className='mainTest-page'>
      <div className='mainTest-page__content'>
        <div className='mainTest-page__filter'>
          <FilterBar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
            selectedFloor={selectedFloor}
            onFloorSelect={setSelectedFloor}
          />
        </div>

        <div className='mainTest-page__floor-map'>
          <FloorMap floor={selectedFloor} roomStatus={roomStatus} onRoomClick={handleRoomClick} />
        </div>
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
      <div className='mainTest__fakeButton' onClick={() => navigate('/mypage-t')} />
    </div>
  )
}
