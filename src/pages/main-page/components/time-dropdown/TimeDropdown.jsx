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

export default function TimeDropdown({ selectedTime, onSelect }) {
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
    </div>
  )
}
