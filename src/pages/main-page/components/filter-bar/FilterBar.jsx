import './FilterBar.css'

export default function FilterBar() {
  return (
    <div className='filter-bar'>
      <div className='filter-bar__toggle'>
        <div className='filter-bar__toggle-calendar' />
        <span className='filter-bar__toggle-text'>06/16/26</span>
      </div>

      <div className='filter-bar__toggle'>
        <span className='filter-bar__toggle-text'>시간</span>
        <span className='filter-bar__toggle-icon' />
      </div>

      <div className='filter-bar__toggle'>
        <span className='filter-bar__toggle-text'>1층</span>
        <span className='filter-bar__toggle-icon' />
      </div>
    </div>
  )
}
