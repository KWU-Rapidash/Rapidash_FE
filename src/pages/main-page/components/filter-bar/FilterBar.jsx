import { useState, useRef, useEffect } from 'react'
import './FilterBar.css'
import CalendarIcon from '../../../../assets/filter-bar/calendar-icon.svg'
import DropdownIcon from '../../../../assets/filter-bar/dropdown-icon.svg'
import DateDropdown from '../date-dropdown/DateDropdown'
import TimeDropdown from '../time-dropdown/TimeDropdown'
import FloorDropdown from '../floor-dropdown/FloorDropdown'

export default function FilterBar({
  selectedDate,
  onDateSelect,
  selectedTime,
  onTimeSelect,
  selectedFloor,
  onFloorSelect,
}) {
  const [isDateOpen, setIsDateOpen] = useState(false)
  const [isTimeOpen, setIsTimeOpen] = useState(false)
  const [isFloorOpen, setIsFloorOpen] = useState(false)
  const dateRef = useRef(null)
  const timeRef = useRef(null)
  const floorRef = useRef(null)

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateRef.current && !dateRef.current.contains(e.target)) {
        setIsDateOpen(false)
      }
      if (timeRef.current && !timeRef.current.contains(e.target)) {
        setIsTimeOpen(false)
      }
      if (floorRef.current && !floorRef.current.contains(e.target)) {
        setIsFloorOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 날짜를 mm/dd/yy 형식으로
  const formatDate = (date) => {
    if (!date) return '날짜'
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    const yy = String(date.getFullYear()).slice(2)
    return `${mm}/${dd}/${yy}`
  }

  const handleDateSelect = (date) => {
    onDateSelect(date)
    setIsDateOpen(false)
  }

  const handleTimeSelect = (time) => {
    onTimeSelect(time)
    setIsTimeOpen(false)
  }

  const handleFloorSelect = (floor) => {
    onFloorSelect(floor)
    setIsFloorOpen(false)
  }

  return (
    <div className='filter-bar'>
      <div className='filter-bar__toggle-wrapper' ref={dateRef}>
        <div className='filter-bar__toggle' onClick={() => setIsDateOpen((prev) => !prev)}>
          <img src={CalendarIcon} alt='캘린더' className='filter-bar__toggle-calendar' />
          <span className='filter-bar__toggle-text'>{formatDate(selectedDate)}</span>
        </div>
        {isDateOpen && <DateDropdown selectedDate={selectedDate} onSelect={handleDateSelect} />}
      </div>

      <div className='filter-bar__toggle-wrapper' ref={timeRef}>
        <div className='filter-bar__toggle' onClick={() => setIsTimeOpen((prev) => !prev)}>
          <span className='filter-bar__toggle-text'>{selectedTime || '시간'}</span>
          <img src={DropdownIcon} alt='' className='filter-bar__toggle-icon' />
        </div>
        {isTimeOpen && <TimeDropdown selectedTime={selectedTime} onSelect={handleTimeSelect} />}
      </div>

      <div className='filter-bar__toggle-wrapper' ref={floorRef}>
        <div className='filter-bar__toggle' onClick={() => setIsFloorOpen((prev) => !prev)}>
          <span className='filter-bar__toggle-text'>{selectedFloor || '1층'}</span>
          <img src={DropdownIcon} alt='' className='filter-bar__toggle-icon' />
        </div>
        {isFloorOpen && (
          <FloorDropdown selectedFloor={selectedFloor} onSelect={handleFloorSelect} />
        )}
      </div>
    </div>
  )
}
