import { useState } from 'react'
import './DateDropdown.css'

const DAYS = ['일', '월', '화', '수', '목', '금', '토']

export default function DateDropdown({ selectedDate, onSelect }) {
  // 현재 년/월
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

  // 이전 달로 이동
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((prev) => prev - 1)
    } else {
      setCurrentMonth((prev) => prev - 1)
    }
  }

  // 다음 달로 이동
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((prev) => prev + 1)
    } else {
      setCurrentMonth((prev) => prev + 1)
    }
  }

  // 해당 월의 총 날짜 수
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
  // 해당 월 1일의 요일 (0:일 ~ 6:토)
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth)
    const days = []

    // 1일 전 빈 칸 채우기
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className='date-dropdown__day' />)
    }

    // 날짜 버튼 렌더링
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentYear, currentMonth, d)
      const isSelected =
        selectedDate &&
        selectedDate.getFullYear() === currentYear &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getDate() === d

      days.push(
        <button
          key={d}
          type='button'
          className={`date-dropdown__day ${isSelected ? 'date-dropdown__day--selected' : ''}`}
          onClick={() => onSelect(date)}
        >
          {d}
        </button>,
      )
    }
    return days
  }

  return (
    <div className='date-dropdown__calendar'>
      <div className='date-dropdown__header'>
        <button type='button' className='date-dropdown__nav' onClick={handlePrevMonth}>
          {'<'}
        </button>
        <span className='date-dropdown__month'>{currentMonth + 1}월</span>
        <span className='date-dropdown__year'>{currentYear}</span>
        <button type='button' className='date-dropdown__nav' onClick={handleNextMonth}>
          {'>'}
        </button>
      </div>

      <div className='date-dropdown__weekdays'>
        {DAYS.map((day) => (
          <div key={day} className='date-dropdown__weekday'>
            {day}
          </div>
        ))}
      </div>

      <div className='date-dropdown__days'>{renderDays()}</div>
    </div>
  )
}
