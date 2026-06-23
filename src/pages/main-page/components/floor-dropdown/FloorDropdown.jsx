import './FloorDropdown.css'
import DropdownIcon from '../../../../assets/filter-bar/dropdown-icon.svg'

const FLOORS = ['1층', '2층']

export default function FloorDropdown({ selectedFloor, onSelect }) {
  return (
    <div className='floor-dropdown__list'>
      <div className='floor-dropdown__header'>
        <span className='floor-dropdown__header-text'>선택</span>
        <img
          src={DropdownIcon}
          alt=''
          className='floor-dropdown__header-icon floor-dropdown__header-icon--open'
        />
      </div>
      <div className='floor-dropdown__divider' />
      <div className='floor-dropdown__items'>
        {FLOORS.map((floor) => (
          <button
            key={floor}
            type='button'
            className={`floor-dropdown__item ${selectedFloor === floor ? 'floor-dropdown__item--selected' : ''}`}
            onClick={() => onSelect(floor)}
          >
            {floor}
          </button>
        ))}
      </div>
    </div>
  )
}
