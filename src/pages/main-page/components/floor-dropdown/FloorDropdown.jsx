import './FloorDropdown.css'

const FLOORS = ['1층', '2층']

export default function FloorDropdown({ selectedFloor, onSelect }) {
  return (
    <div className='floor-dropdown__list'>
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
  )
}
