import './MainPage.css'
import FilterBar from '../components/filter-bar/FilterBar'
import FloorMap from '../components/floor-map/FloorMap'
import ReservationModal from '../components/reservation-modal/ReservationModal'
import ConfirmModal from '../components/confirm-modal/ConfirmModal'

export default function MainPage() {
  return (
    <div className='main-page'>
      <div className='main-page__topbar'>
        <div className='main-page__topbar-inner'>
          <img className='main-page__topbar-logo' alt='광운대학교' />
          <button className='main-page__topbar-mypage' type='button' />
        </div>
      </div>

      <div className='main-page__content'>
        <FilterBar />
        <FloorMap />
      </div>

      <ReservationModal />
      <ConfirmModal />
    </div>
  )
}
