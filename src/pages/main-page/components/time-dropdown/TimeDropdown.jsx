import './TimeDropdown.css'

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

export default function TimeDropdown({ selectedTime, onSelect }) {
  return (
    <div className='time-dropdown__list'>
      {TIME_SLOTS.map((time) => (
        <button
          key={time}
          type='button'
          className={`time-dropdown__item ${selectedTime === time ? 'time-dropdown__item--selected' : ''}`}
          onClick={() => onSelect(time)}
        >
          {time}
        </button>
      ))}
    </div>
  )
}
