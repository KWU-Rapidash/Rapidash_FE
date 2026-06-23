import './TimeDropdown.css'
import DropdownIcon from '../../../../assets/filter-bar/dropdown-icon.svg'

const TIME_SLOTS = [
  '9~10:30',
  '10:30~12',
  '12~13:30',
  '13:30~15',
  '15~16:30',
  '16:30~18',
  '18~19',
  '19~20',
  '20~21',
  '21~22',
]

export default function TimeDropdown({ selectedDate, selectedTime, onSelect }) {
  const now = new Date()

  // 선택한 날짜가 오늘인지 확인
  const isToday = selectedDate && selectedDate.toDateString() === now.toDateString()

  return (
    <div className='time-dropdown__list'>
      <div className='time-dropdown__header'>
        <span className='time-dropdown__header-text'>선택</span>
        <img
          src={DropdownIcon}
          alt=''
          className='time-dropdown__header-icon time-dropdown__header-icon--open'
        />
      </div>

      <div className='time-dropdown__divider' />

      <div className='time-dropdown__items'>
        {TIME_SLOTS.map((time) => {
          // 시간대 시작 시간 추출
          const startHour = Number(time.split('~')[0].split(':')[0])

          // 오늘일 경우 현재 시간보다 이전 시간대는 선택 불가
          const isPastTime = isToday && startHour < now.getHours()

          return (
            <button
              key={time}
              type='button'
              disabled={isPastTime}
              className={`time-dropdown__item
                ${selectedTime === time ? 'time-dropdown__item--selected' : ''}
                ${isPastTime ? 'time-dropdown__item--disabled' : ''}
              `}
              onClick={() => onSelect(time)}
            >
              {time}
            </button>
          )
        })}
      </div>
    </div>
  )
}
