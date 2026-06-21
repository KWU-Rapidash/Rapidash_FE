import './FilterBar.css'
import CalendarIcon from '../../../../assets/filter-bar/calendar-icon.svg'
import DropdownIcon from '../../../../assets/filter-bar/dropdown-icon.svg'

export default function FilterBar() {
  return (
    <div className='filter-bar'>
      <div className='filter-bar__toggle'>
        <img src={CalendarIcon} alt='캘린더' className='filter-bar__toggle-calendar' />
        <span className='filter-bar__toggle-text'>06/16/26</span>
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
