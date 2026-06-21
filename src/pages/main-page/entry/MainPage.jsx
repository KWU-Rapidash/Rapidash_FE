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
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedFloor, setSelectedFloor] = useState('1층')
  const [roomStatus, setRoomStatus] = useState({})

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
        <FloorMap floor={selectedFloor} roomStatus={roomStatus} />
      </div>

      {/* <ReservationModal /> */}
      {/* <ConfirmModal /> */}
    </div>
  )
}
