import { useState, useRef, useEffect } from 'react'
import './FilterBar.css'
import CalendarIcon from '../../../../assets/filter-bar/calendar-icon.svg'
import DropdownIcon from '../../../../assets/filter-bar/dropdown-icon.svg'
import DateDropdown from '../date-dropdown/DateDropdown'

export default function FilterBar() {
  const [isDateOpen, setIsDateOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const dateRef = useRef(null)

  // 외부 클릭 시 달력 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateRef.current && !dateRef.current.contains(e.target)) {
        setIsDateOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 날짜 mm/dd/yy 형식으로
  const formatDate = (date) => {
    if (!date) return '날짜'
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    const yy = String(date.getFullYear()).slice(2)
    return `${mm}/${dd}/${yy}`
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setIsDateOpen(false)
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

      <div className='filter-bar__toggle'>
        <span className='filter-bar__toggle-text'>시간</span>
        <img src={DropdownIcon} alt='' className='filter-bar__toggle-icon' />
      </div>

      <div className='filter-bar__toggle'>
        <span className='filter-bar__toggle-text'>1층</span>
        <img src={DropdownIcon} alt='' className='filter-bar__toggle-icon' />
      </div>
    </div>
  )
}
