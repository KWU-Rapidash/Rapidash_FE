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

    const prevMonthDays = getDaysInMonth(
      currentMonth === 0 ? currentYear - 1 : currentYear,
      currentMonth === 0 ? 11 : currentMonth - 1,
    )

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className='date-dropdown__day date-dropdown__day--other'>
          {prevMonthDays - i}
        </div>,
      )
    }

    // 날짜 버튼 렌더링
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentYear, currentMonth, d)

      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const isPastDate = date < today

      const isSelected =
        selectedDate &&
        selectedDate.getFullYear() === currentYear &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getDate() === d

      const isWeekend = date.getDay() === 0 || date.getDay() === 6

      days.push(
        <button
          key={d}
          type='button'
          disabled={isPastDate}
          className={`date-dropdown__day
    ${isSelected ? 'date-dropdown__day--selected' : ''}
    ${isWeekend ? 'date-dropdown__day--weekend' : ''}
    ${isPastDate ? 'date-dropdown__day--disabled' : ''}
  `}
          onClick={() => onSelect(date)}
        >
          {d}
        </button>,
      )
    }

    let nextDay = 1

    while (days.length % 7 !== 0) {
      days.push(
        <div key={`next-${nextDay}`} className='date-dropdown__day date-dropdown__day--other'>
          {nextDay}
        </div>,
      )
      nextDay++
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
          <div
            key={day}
            className={`date-dropdown__weekday ${
              day === '일' || day === '토'
                ? 'date-dropdown__weekday--weekend'
                : 'date-dropdown__weekday--weekday'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className='date-dropdown__days'>{renderDays()}</div>
    </div>
  )
}
